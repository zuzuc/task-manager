import React, { useState, useEffect } from "react";
import TaskInput from "../../components/task-input/TaskInput";
import TaskList from "../../components/task-list/TaskList";
import DeleteAllTasks from "../../components/delete-tasks/DeleteAllTasks";

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

  const handleDeleteAllTasks = () => {
    setTasks([]); // Clear the state
    localStorage.removeItem("tasks"); // Clear localStorage
  };

  return (
    <div className="task-manager-page">
      <TaskInput onAddTask={handleAddTask} />
      <TaskList tasks={tasks} />
      <DeleteAllTasks onClick={handleDeleteAllTasks}>
        Delete All Tasks
      </DeleteAllTasks>
    </div>
  );
}

export default TaskManagerPage;
