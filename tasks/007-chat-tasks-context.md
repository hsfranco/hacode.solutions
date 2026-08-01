# Task 007 — Chat Context: Inject Existing Task Files

## Goal
Load all existing `.md` task files from the configured folder into the AI system prompt so the model has full project context before helping build the next task.

## Depends On
- Task 005 (folder config — needed to know where to read tasks from)
- Task 006 (chat endpoint `POST /api/chat` must exist)

## How It Works

On every `POST /api/chat` call, the server:
1. Reads all `.md` files from the configured tasks folder (sorted by filename)
2. Concatenates their contents
3. Injects them into the Claude system prompt before the conversation history

The AI then uses this context to:
- Avoid duplicating existing tasks
- Reference prior task numbers when there are dependencies
- Follow the same markdown structure and style
- Suggest the correct next sequential number automatically

## System Prompt Structure

```
You are a task architect for a software project. Your job is to help the user build
detailed, well-structured .md task files by asking focused questions one at a time.

## Existing Tasks (read-only context)

### 001-project-setup.md
<file content>

### 002-mysql-setup.md
<file content>

... (all files)

## Your Rules
- Ask one question at a time — never a list of questions at once
- Push for specificity: vague steps are not acceptable
- Reference existing task numbers when dependencies exist (e.g. "Depends on Task 002")
- Do not suggest tasks that are already covered by existing files
- When you have enough information, output the full .md draft using the same structure as existing files
- End the draft with the exact string: <!-- TASK_READY --> so the UI can detect it
```

## Steps

- [ ] Update `POST /api/chat` to read all `.md` files from the configured folder before calling Claude
- [ ] Build the system prompt dynamically by prepending each file's content with its filename as a header
- [ ] Handle the empty case (no existing tasks) — AI starts fresh without context errors
- [ ] Add the `<!-- TASK_READY -->` signal to the system prompt instructions
- [ ] On the frontend, detect `<!-- TASK_READY -->` in the AI reply:
  - Strip the signal from the displayed message
  - Show a "Save Task" button below the message
- [ ] Keep context injection efficient:
  - If total task content exceeds ~80,000 characters, include only the most recent 20 files
  - Always include the full content of the 5 most recent files

## Acceptance Criteria
- The AI naturally references existing task numbers in conversation
- The AI never suggests duplicating a task that already exists
- The AI correctly identifies the next sequential number without being told
- The AI follows the exact markdown structure of existing files
- The `<!-- TASK_READY -->` signal triggers the Save button in the UI
- Works correctly with zero, a few, or many existing task files
