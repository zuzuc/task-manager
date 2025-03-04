import express from "express";
import sqlite3 from "sqlite3";
import cors from "cors";

const app = express();
const PORT = 3001;
const db = new sqlite3.Database("database.db");

// Use CORS middleware
app.use(cors());
app.use(express.json()); // To parse JSON body

// GET all tasks
app.get("/db/tasks", (req, res) => {
  db.all(`SELECT * FROM tasks`, (error, rows) => {
    res.json(rows);
  });
});

// GET a single task by ID
app.get("/db/tasks/:id", (req, res) => {
  const taskId = req.params.id; // Extract id from URL
  db.all(`SELECt * FROM tasks WHERE id = ?`, [taskId], (error, rows) => {
    res.json(rows);
  })
})


app.listen(PORT, () => {
  console.log("Task Manager listening");
});
