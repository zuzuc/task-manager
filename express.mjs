const express = require("express");
const sqlite3 = require("sqlite3").verbose;
const cors = require("cors");

const app = express();
const PORT = 3001;
const db = new sqlite3.Database("database.db");

// Use CORS middleware
app.use(cors());
app.use(express.json()); // To parse JSON body

app.get("/db", (req, res) => {
  db.serialize(() => {
    db.all(`SELECT * FROM tasks`, (error, rows) => {
      res.json(rows);
    });
  });
});

// app.get("/db", (req, res) => {
//   db.all(`SELECT * FROM tasks`, (error, rows) => {
//     if (error) {
//       res.status(500).json({ error: error.message });
//     } else {
//       res.json(rows);
//     }
//   });
// });

app.listen(PORT, () => {
  console.log("Task Manager listening on http://localhost:${PORT}");
});
