# Task 005 — Folder Config: Configurable Tasks Save Location

## Goal
Let the user set and persist the local folder path where `.md` task files will be saved, stored in MySQL.

## Depends On
- Task 002 (MySQL schema must exist — uses `config` table)

## How It Works
- On first run, no folder is configured
- The user sets the path once via a settings UI
- The path is saved to the `config` table in MySQL
- All task operations read the path from there dynamically

## API Endpoints

- `GET /api/config` — returns `{ tasksFolder: "..." }` from the `config` table
- `POST /api/config` — receives `{ tasksFolder }`, validates the path exists on the filesystem, saves to DB

## Steps

- [ ] Implement `GET /api/config` — query the `config` table, return the first row or `{ tasksFolder: "" }`
- [ ] Implement `POST /api/config`:
  - Validate the path exists using `fs.existsSync()`
  - If it doesn't exist, return `400` with a clear error message
  - Upsert the path into the `config` table
- [ ] Add a settings panel to the admin page (`/admin`):
  - Shows the current configured folder path
  - Input field (`input-field` class) to set a new path
  - Save button (`btn-ghost` class)
  - Inline success or error feedback
- [ ] If no folder is configured when a task save is attempted, block it and prompt the user to configure a folder first
- [ ] On server startup, log the currently configured folder path (or warn if none is set)

## Acceptance Criteria
- User sets a folder path in the UI and it persists after server restart
- Invalid or nonexistent paths return a readable error, not a 500
- Task saves are blocked until a folder is configured
- The configured path is read dynamically — no hardcoded paths anywhere in the codebase
