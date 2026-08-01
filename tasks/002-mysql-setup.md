# Task 002 — MySQL Setup

## Goal
Connect the Express server to a local MySQL database and create the schema needed by the application.

## Depends On
- Task 001 (project setup must be complete)

## Steps

- [ ] Create `.env` with database credentials:
  ```env
  DB_HOST=localhost
  DB_PORT=3306
  DB_USER=root
  DB_PASSWORD=
  DB_NAME=hacode_tasks
  ```
- [ ] Create `server/db.js` — exports a `mysql2/promise` connection pool, loaded with `dotenv`
- [ ] Create `server/migrate.js` with the following schema:
  ```sql
  CREATE DATABASE IF NOT EXISTS hacode_tasks;

  USE hacode_tasks;

  CREATE TABLE IF NOT EXISTS config (
    id INT PRIMARY KEY AUTO_INCREMENT,
    tasks_folder VARCHAR(500) NOT NULL,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
  );

  CREATE TABLE IF NOT EXISTS chat_sessions (
    id INT PRIMARY KEY AUTO_INCREMENT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  );

  CREATE TABLE IF NOT EXISTS chat_messages (
    id INT PRIMARY KEY AUTO_INCREMENT,
    session_id INT NOT NULL,
    role ENUM('user', 'assistant') NOT NULL,
    content TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (session_id) REFERENCES chat_sessions(id)
  );
  ```
- [ ] Run `npm run migrate` and confirm all tables are created
- [ ] In `server/index.js`, test the DB connection on startup and log success or a clear error message

## Acceptance Criteria
- `npm run migrate` creates the database and all tables without errors
- Server logs a successful DB connection on startup
- A bad `.env` config produces a readable error, not a crash
