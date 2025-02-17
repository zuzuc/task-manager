import express from "express";
import sqlite3 from "sqlite3";
const db = new sqlite3.Database("database.db");

const app = express();

app.get("/db", (req, res) => {
  db.serialize(() => {
    db.all(`SELECT * FROM tasks`, (error, rows) => {
      res.json(rows);
    });
  });
});

app.listen(3001, () => {
  console.log("Task Manager listening");
});
