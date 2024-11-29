import React, { useState, useEffect } from "react";
import "./TaskManagerPage.css";
import TaskInput from "../../components/task-input/TaskInput";
import TaskList from "../../components/task-list/TaskList";

function TaskManagerPage() {
  const [tasks, setTasks] = useState(() => {
    // Load tasks from localStorage when the component initializes
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  // Save tasks to localStorage whenever the tasks state changes
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleAddTask = (newTask) => {
    setTasks((prevTasks) => [...prevTasks, newTask]); // Adds the new task to the tasks array
  };

  return (
    <div className="task-manager-container">
      <div className="task-manager">
        <h1>Task Manager</h1>
        <TaskInput onAddTask={handleAddTask} />
        <TaskList tasks={tasks} setTasks={setTasks} />
      </div>
    </div>
  );
}

export default TaskManagerPage;
