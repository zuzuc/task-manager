import sqlite3 from "sqlite3";
const db = new sqlite3.Database("database.db");

const task = {
  name: "groceries",
  priority: "high",
};

db.serialize(() => {
  // Insert hardcoe tasks
  db.run(
    'INSERT INTO tasks VALUES (1, "cleaning", "medium", TRUE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)'
  );
  db.run(
    'INSERT INTO tasks (id, name, priority, created_at) VALUES (2, "dishes", "high", CURRENT_TIMESTAMP)'
  );

  // Insert dynamic task
  db.run(
    "INSERT INTO tasks (name, priority) VALUES (?, ?)",
    [task.name, task.priority],
    (err) => {
      if (err) {
        console.error("Error inserting dynamic task:", err.message);
      } else {
        console.log("Dynamic task inserted successfully!");
      }
    }
  );
});
