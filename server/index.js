require('dotenv').config();
const express = require('express');
const path = require('path');
const fs = require('fs');
const os = require('os');
const pool = require('./db');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Wraps async handlers so thrown errors reach the JSON error handler below
const wrap = fn => (req, res, next) => Promise.resolve(fn(req, res, next)).catch(next);

// ── Filesystem browser ────────────────────────────────────────────────────────

app.get('/api/fs/browse', (req, res) => {
  let dirPath = req.query.path || os.homedir();
  if (dirPath === '~' || dirPath.startsWith('~/')) {
    dirPath = dirPath.replace(/^~/, os.homedir());
  }
  try {
    const entries = fs.readdirSync(dirPath, { withFileTypes: true });
    const dirs = entries
      .filter(e => e.isDirectory() && !e.name.startsWith('.'))
      .map(e => ({ name: e.name, path: path.join(dirPath, e.name) }))
      .sort((a, b) => a.name.localeCompare(b.name));
    const parent = path.dirname(dirPath) !== dirPath ? path.dirname(dirPath) : null;
    res.json({ current: dirPath, parent, dirs });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// ── Config ────────────────────────────────────────────────────────────────────

app.get('/api/config', wrap(async (req, res) => {
  const [rows] = await pool.query('SELECT tasks_folder FROM config LIMIT 1');
  res.json({ tasksFolder: rows.length ? rows[0].tasks_folder : '' });
}));

app.post('/api/config', wrap(async (req, res) => {
  const { tasksFolder } = req.body;
  if (!tasksFolder) return res.status(400).json({ error: 'tasksFolder is required' });
  if (!fs.existsSync(tasksFolder)) {
    return res.status(400).json({ error: `Path does not exist: ${tasksFolder}` });
  }
  const [rows] = await pool.query('SELECT id FROM config LIMIT 1');
  if (rows.length) {
    await pool.query('UPDATE config SET tasks_folder = ? WHERE id = ?', [tasksFolder, rows[0].id]);
  } else {
    await pool.query('INSERT INTO config (tasks_folder) VALUES (?)', [tasksFolder]);
  }
  res.json({ tasksFolder });
}));

// ── Tasks ─────────────────────────────────────────────────────────────────────

async function getTasksFolder() {
  const [rows] = await pool.query('SELECT tasks_folder FROM config LIMIT 1');
  return rows.length ? rows[0].tasks_folder : null;
}

function getTaskFiles(folder) {
  return fs.readdirSync(folder).filter(f => f.endsWith('.md')).sort();
}

function nextTaskNumber(folder) {
  const files = getTaskFiles(folder);
  let max = 0;
  for (const f of files) {
    const m = f.match(/^(\d+)/);
    if (m) max = Math.max(max, parseInt(m[1]));
  }
  return String(max + 1).padStart(3, '0');
}

function slugify(str) {
  return str.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

app.get('/api/tasks', wrap(async (req, res) => {
  const folder = await getTasksFolder();
  if (!folder) return res.json({ tasks: [], configured: false });
  const files = getTaskFiles(folder);
  const tasks = files.map(filename => {
    const m = filename.match(/^(\d+)-(.+)\.md$/);
    const number = m ? m[1] : null;
    const slug   = m ? m[2].replace(/-/g, ' ') : filename.replace('.md', '');
    const title  = slug.replace(/\b\w/g, c => c.toUpperCase());
    return { filename, number, title };
  });
  res.json({ tasks, configured: true });
}));

app.get('/api/tasks/:filename', wrap(async (req, res) => {
  const folder = await getTasksFolder();
  if (!folder) return res.status(400).json({ error: 'No tasks folder configured' });
  const filename = path.basename(req.params.filename);
  const filepath = path.join(folder, filename);
  if (!fs.existsSync(filepath)) return res.status(404).json({ error: 'File not found' });
  const content = fs.readFileSync(filepath, 'utf8');
  res.json({ filename, content });
}));

app.delete('/api/tasks/:filename', wrap(async (req, res) => {
  const folder = await getTasksFolder();
  if (!folder) return res.status(400).json({ error: 'No tasks folder configured' });
  const filename = path.basename(req.params.filename); // prevent path traversal
  const filepath = path.join(folder, filename);
  if (!fs.existsSync(filepath)) return res.status(404).json({ error: 'File not found' });
  fs.unlinkSync(filepath);
  res.json({ deleted: filename });
}));

app.get('/api/tasks/next-number', wrap(async (req, res) => {
  const folder = await getTasksFolder();
  if (!folder) return res.status(400).json({ error: 'No tasks folder configured' });
  res.json({ nextNumber: nextTaskNumber(folder) });
}));

app.post('/api/tasks', wrap(async (req, res) => {
  const { content, title } = req.body;
  if (!content || !title) return res.status(400).json({ error: 'content and title are required' });
  const folder = await getTasksFolder();
  if (!folder) return res.status(400).json({ error: 'No tasks folder configured. Set it in Admin settings first.' });
  const num = nextTaskNumber(folder);
  const filename = `${num}-${slugify(title)}.md`;
  fs.writeFileSync(path.join(folder, filename), content, 'utf8');
  res.json({ filename });
}));

// ── Chat ──────────────────────────────────────────────────────────────────────

app.post('/api/chat', wrap(async (req, res) => {
  const { messages } = req.body;
  if (!messages || !Array.isArray(messages)) {
    return res.status(400).json({ error: 'messages array is required' });
  }

  const endpoint   = process.env.AZURE_AI_ENDPOINT;
  const apiKey     = process.env.AZURE_AI_KEY;
  const deployment = process.env.AZURE_AI_DEPLOYMENT;
  const apiVersion = process.env.AZURE_AI_API_VERSION || '2024-05-01-preview';

  if (!endpoint || !apiKey || !deployment) {
    return res.status(500).json({ error: 'Azure AI Foundry not configured. Set AZURE_AI_ENDPOINT, AZURE_AI_KEY and AZURE_AI_DEPLOYMENT in .env' });
  }

  let tasksFolder = null;
  let existingFiles = [];
  try {
    tasksFolder = await getTasksFolder();
    if (tasksFolder) existingFiles = getTaskFiles(tasksFolder);
  } catch (_) {}

  const nextNumber = tasksFolder
    ? String((() => {
        let max = 0;
        for (const f of existingFiles) {
          const m = f.match(/^(\d+)/);
          if (m) max = Math.max(max, parseInt(m[1]));
        }
        return max + 1;
      })()).padStart(3, '0')
    : '001';

  let systemPrompt = `You are a Task Manager AI. Your job is to help the user define, structure, and create rich, detailed task files in Markdown format (.md).

## Your Environment
- Tasks folder: ${tasksFolder || '(not configured yet)'}
- Total existing tasks: ${existingFiles.length}
- Next task number: ${nextNumber}
- File naming convention: NNN-short-slug.md (e.g. ${nextNumber}-my-new-feature.md)
- Files are saved sequentially — never skip or reuse a number

## Task File Structure
Every task file you produce must follow this exact structure:

\`\`\`
# Task NNN — Title

## Goal
One clear paragraph describing what this task accomplishes and why it matters.

## Depends On
- Task NNN (reason) — omit this section if no dependencies

## Steps
- [ ] Step one (be specific: file names, commands, field names)
- [ ] Step two
- [ ] ...

## Acceptance Criteria
- Bullet list of verifiable conditions that prove the task is done
\`\`\`

## Conversation Rules
- Ask ONE question at a time — never fire a list of questions
- Start with "What are you trying to build?" if the user gives only a vague idea
- Push for specificity: file names, API shapes, field names, commands — vague steps are not acceptable
- Infer dependencies from the existing tasks below and reference them by number
- Never suggest a task that duplicates something already covered
- When you have gathered enough detail, write the complete .md file
- End every draft with the exact marker: <!-- TASK_READY -->
  This marker tells the UI to show the Save button — do not omit it

`;

  if (existingFiles.length > 0) {
    // Inject existing tasks as context (cap at ~80k chars, always include last 5)
    const alwaysInclude = new Set(existingFiles.slice(-5));
    const included = new Set(alwaysInclude);
    let totalChars = 0;

    for (const f of [...existingFiles].reverse()) {
      const content = fs.readFileSync(path.join(tasksFolder, f), 'utf8');
      if (totalChars + content.length > 80000 && !included.has(f)) continue;
      included.add(f);
      totalChars += content.length;
    }

    systemPrompt += `## Existing Tasks (read-only — use for context, dependencies and numbering)\n\n`;
    for (const f of [...included].sort()) {
      const content = fs.readFileSync(path.join(tasksFolder, f), 'utf8');
      systemPrompt += `### ${f}\n${content}\n\n`;
    }
  } else {
    systemPrompt += `## Existing Tasks\nNone yet — this will be the first task (001).\n\n`;
  }

  const base = endpoint.replace(/\/openai.*$/, '').replace(/\/$/, '');
  const url = `${base}/openai/v1/responses`;
  console.log('[chat] POST', url);

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'api-key': apiKey,
    },
    body: JSON.stringify({
      model: deployment,
      instructions: systemPrompt,
      input: messages,
      max_output_tokens: 4096,
    }),
  });

  if (!response.ok) {
    const errText = await response.text();
    return res.status(502).json({ error: `Azure AI error: ${errText}` });
  }

  const data = await response.json();
  const reply = data.output.find(o => o.type === 'message')?.content?.[0]?.text ?? '';
  res.json({ reply });
}));

// ── Static files + pages ──────────────────────────────────────────────────────

app.use(express.static(path.join(__dirname, '../public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.get('/admin', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/admin.html'));
});

// ── Global JSON error handler ─────────────────────────────────────────────────

app.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
  console.error(err.stack || err.message);
  res.status(500).json({ error: err.message || 'Internal server error' });
});

// ── Start ─────────────────────────────────────────────────────────────────────

app.listen(PORT, async () => {
  console.log(`Server running at http://localhost:${PORT}`);
  try {
    const folder = await getTasksFolder();
    if (folder) {
      console.log(`Tasks folder: ${folder}`);
    } else {
      console.warn('Warning: no tasks folder configured. Visit /admin to set one.');
    }
  } catch (err) {
    console.error('DB connection failed:', err.message);
  }
});
