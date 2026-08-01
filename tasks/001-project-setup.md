# Task 001 — Project Setup: Node.js + Express

## Goal
Initialize the Node.js + Express server that will be the foundation for every other task.

## Steps

- [ ] Create `package.json` with name `hacode-tasks`
- [ ] Install dependencies: `express`, `mysql2`, `dotenv`
- [ ] Install dev dependencies: `tailwindcss`, `postcss`, `autoprefixer`
- [ ] Set up the project folder structure:
  ```
  hacode.solutions/
  ├── server/
  │   ├── index.js       # Express entry point
  │   ├── db.js          # MySQL connection
  │   └── migrate.js     # DB schema migration
  ├── public/
  │   ├── styles/
  │   │   ├── input.css  # Tailwind source
  │   │   └── output.css # Tailwind compiled (gitignored)
  │   └── index.html     # Home page
  ├── .env               # DB credentials (gitignored)
  ├── .gitignore
  └── tailwind.config.js
  ```
- [ ] Create a minimal `server/index.js` that starts Express on port `3000`
- [ ] Add to `.gitignore`: `node_modules/`, `.env`, `public/styles/output.css`
- [ ] Add npm scripts to `package.json`:
  ```json
  "scripts": {
    "start": "node server/index.js",
    "build:css": "tailwindcss -i ./public/styles/input.css -o ./public/styles/output.css --watch",
    "migrate": "node server/migrate.js"
  }
  ```
- [ ] Verify `npm start` runs without errors and responds at `http://localhost:3000`

## Acceptance Criteria
- Server starts with `npm start`
- `http://localhost:3000` returns a response
- No secrets are committed to git
