import express from "express";
import sqlite3 from "sqlite3";
import cors from "cors";

const app = express();
const db = new sqlite3.Database("database.db");

// Use CORS middleware
app.use(cors());

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

app.listen(3001, () => {
  console.log("Task Manager listening");
});
