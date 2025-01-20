import sqlite3 from "sqlite3";
const db = new sqlite3.Database("database.db");

db.serialize(() => {
  db.run(`
        CREATE TABLE tasks (
            id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            priority TEXT NOT NULL,
            status INTEGER NOT NULL DEFAULT FALSE,
            created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
            updated_at DATETIME
        )
    `);
});

// const result = db.run('SELECT info FROM tasks')
// console.log(result);
