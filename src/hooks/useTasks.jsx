import { useState, useEffect } from "react";

const useTasks = () => {
  const [tasks, setTasks] = useState(() => {
    // Initialize tasks from local storage or default to an empty array
    const savedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    return savedTasks.map((task) => ({
      ...task,
      editing: false, // Ensure editing is reset to false on load
    }));
  });

  // Save tasks to local storage whenever they change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (newTask) => {
    setTasks((prevTasks) => [...prevTasks, newTask]); // Adds the new task to the tasks array
  };

  const deleteSingleTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  const deleteAllTasks = () => setTasks([]);

  const toggleTaskCompletion = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // resets the editing property to false after the task has been updated
  const updateTask = (id, updatedTask) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, ...updatedTask, editing: false } : task
      )
    );
  };

  // Computed property: sorted tasks
  const sortedTasks = [...tasks].sort((a, b) => {
    if (a.completed !== b.completed) {
      // Completed tasks go to the bottom
      return a.completed ? 1 : -1;
    }
    // Sort by priority: High > Medium > Low
    const priorityOrder = { high: 1, medium: 2, low: 3 };
    return priorityOrder[a.priority] - priorityOrder[b.priority];
  });

  return {
    tasks,
    sortedTasks,
    setTasks,
    addTask,
    deleteSingleTask,
    deleteAllTasks,
    toggleTaskCompletion,
    updateTask,
  };
};

export default useTasks;
