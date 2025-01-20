import sqlite3 from "sqlite3";
const db = new sqlite3.Database("database.db");

db.serialize(() => {
  db.run('INSERT INTO tasks VALUES (1, "cleaning", "medium", TRUE, 20250120, 20250120)');
  db.run('INSERT INTO tasks (id, name, priority) VALUES (2, "dishes", "high")');
});
