# Task 006 — Admin Page: AI Chat Task Builder

## Goal
Build the admin page as a conversational chat interface where the user talks to Claude to build rich, detailed `.md` task files through guided dialogue.

## Depends On
- Task 003 (design system)
- Task 004 (home page and nav structure)
- Task 005 (folder config — needed to know where to save tasks)

## How It Works

1. User opens `/admin`
2. Chat opens with an AI greeting:
   > "What task do you want to build today? Give me a brief idea and I'll help you flesh it out."
3. User types a rough idea
4. AI asks focused clarifying questions one at a time
5. When enough context is gathered, AI outputs a full `.md` preview in the chat
6. A "Save Task" button appears — user confirms
7. File is saved to the configured folder with the next sequential number

## UI Layout

- Top: `nav-bar` with `hacode.solutions` logo and link back to home
- Left sidebar (optional): list of existing task files
- Main area: scrollable chat thread
- Bottom: fixed text input + send button

## Chat Message Style
- User messages: right-aligned, `bg-surface`, `text-primary`
- AI messages: left-aligned, no background, `text-muted`
- No avatars, no speech bubbles
- Timestamp below each message in `text-muted` at `11px`
- Markdown rendered in AI messages (use a lightweight renderer like `marked`)

## API Endpoints

- `POST /api/chat` — receives `{ messages: [...] }`, calls Claude API, returns AI reply
- `POST /api/tasks` — receives `{ content, title }`, generates filename, saves `.md` to configured folder
- `GET /api/tasks` — returns list of `.md` files in configured folder, sorted by number
- `GET /api/tasks/next-number` — returns the next available 3-digit number

## Steps

- [ ] Create `public/admin.html` with the chat layout using Tailwind + design system
- [ ] Implement the chat thread in vanilla JS (no framework needed):
  - `sendMessage()` — appends user message, calls `POST /api/chat`, appends AI reply
  - Auto-scroll to bottom on new messages
  - Disable input while waiting for AI response
- [ ] Implement `POST /api/chat` on the server:
  - Load `ANTHROPIC_API_KEY` from `.env`
  - Call Claude API (`claude-sonnet-4-6`) with the conversation history
  - Return the assistant reply
- [ ] Implement `POST /api/tasks`:
  - Read configured folder from DB
  - Determine next sequential number
  - Slugify the title for the filename
  - Write the `.md` file
  - Return the saved filename
- [ ] Implement `GET /api/tasks` — list and sort files from the configured folder
- [ ] When the AI finishes the draft, detect a signal (e.g. a specific phrase or JSON flag) and show a "Save Task" button
- [ ] Add `ANTHROPIC_API_KEY` to `.env` and `.env.example`
- [ ] Serve `admin.html` from Express at `GET /admin`

## Acceptance Criteria
- User can have a back-and-forth conversation with the AI
- AI asks focused questions and produces a complete task draft
- Markdown preview of the task is rendered in the chat before saving
- Confirmed tasks are saved with the correct sequential filename
- Existing task files are listed in the sidebar
- The whole flow works end-to-end in the browser without page reloads
