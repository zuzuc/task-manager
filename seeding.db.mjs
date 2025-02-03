import sqlite3 from "sqlite3";
const db = new sqlite3.Database("database.db");

db.serialize(() => {
  // Insert hardcoded tasks
  db.run(
    'INSERT INTO tasks (name, priority, status, created_at, updated_at) VALUES ("cleaning", "medium", TRUE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)'
  );
  db.run(
    'INSERT INTO tasks (name, priority, created_at) VALUES ("dishes", "high", CURRENT_TIMESTAMP)'
  );
  db.run(
    'INSERT INTO tasks (name, priority, created_at) VALUES ("buy presents", "medium", CURRENT_TIMESTAMP)'
  );
  db.run(
    'INSERT INTO tasks (name, priority, created_at) VALUES ("gardening", "low", CURRENT_TIMESTAMP)'
  );
  db.run(
    'INSERT INTO tasks (name, priority, created_at) VALUES ("homework", "high", CURRENT_TIMESTAMP)'
  );
  db.run(
    'INSERT INTO tasks (name, priority, created_at) VALUES ("babysitting", "high", CURRENT_TIMESTAMP)'
  );
  db.run(
    'INSERT INTO tasks (name, priority, created_at) VALUES ("sew a bag", "low", CURRENT_TIMESTAMP)'
  );
  db.run(
    'INSERT INTO tasks (name, priority, created_at) VALUES ("send applications", "high", CURRENT_TIMESTAMP)'
  );
  db.run(
    'INSERT INTO tasks (name, priority, created_at) VALUES ("wipe floor", "medium", CURRENT_TIMESTAMP)'
  );
  db.run(
    'INSERT INTO tasks (name, priority, created_at) VALUES ("hanging the shelf", "low", CURRENT_TIMESTAMP)'
  );

  const priorities = ["low", "medium", "high"];

  function getRandomInt(max) {
    return Math.floor(Math.random() * max + 1);
  }

  function getRandomName() {
    const characters = ["a", "b", "c", "d", "e", "f", "i", "o", "u"];
    return (
      characters[getRandomInt(8)] +
      characters[getRandomInt(8)] +
      characters[getRandomInt(8)] +
      characters[getRandomInt(8)] +
      characters[getRandomInt(8)]
    );
  }

  function getRandomTask() {
    return {
      name: getRandomName(),
      priority: priorities[getRandomInt(2)],
      status: getRandomInt(1),
    };
  }

  // Insert dynamic task
  for (let i = 0; i < 500; i++) {
    const task = getRandomTask();
    db.run(
      "INSERT INTO tasks (name, priority, status) VALUES (?, ?, ?)",
      [task.name, task.priority, task.status],
      (err) => {
        if (err) {
          console.error("Error inserting dynamic task:", err.message);
        }
      }
    );
  }
});
