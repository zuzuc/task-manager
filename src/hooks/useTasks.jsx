import { useState, useEffect } from "react";

const useTasks = () => {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/db/tasks")
      .then((res) => res.json())
      .then((data) => setTasks(data))
      .catch((error) => console.error("Error:", error));
  }, [tasks]);

  // Initialize tasks from local storage or default to an empty array
  // const savedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
  // return savedTasks.map((task) => ({
  //   ...task,
  //   editing: false, // Ensure editing is reset to false on load
  // }));

  // Save tasks to local storage whenever they change
  // useEffect(() => {
  //   localStorage.setItem("tasks", JSON.stringify(tasks));
  // }, [tasks]);

  const addTask = async (newTask) => {
    await fetch(`http://localhost:3001/db/tasks`, { method: `POST` });
    setTasks((prevTasks) => [...prevTasks, newTask]); // Adds the new task to the tasks array
  };

  const deleteSingleTask = async (id) => {
    await fetch(`http://localhost:3001/db/tasks/${id}`, { method: `DELETE` });
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  const clearCompletedTasks = () =>
    setTasks((prevTasks) => [...prevTasks].filter((task) => !task.completed));

  const deleteAllTasks = () => setTasks([]);

  const toggleTaskCompletion = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Resets the editing property to false after the task has been updated
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
      // Completed tasks return 1 and move to the bottom of the list
      // Uncompleted tasks return -1 and stay at the top
      return a.completed ? 1 : -1;
    }
    // Sort by priority: High > Medium > Low
    const priorityOrder = { high: 1, medium: 2, low: 3 };
    // If task a has a higher priority, the result is negative and task a appears before task b
    // If task b has a higher priority, the result is positive and, task b appears before task a
    return priorityOrder[a.priority] - priorityOrder[b.priority];
  });

  return {
    tasks,
    sortedTasks,
    setTasks,
    addTask,
    deleteSingleTask,
    deleteAllTasks,
    clearCompletedTasks,
    toggleTaskCompletion,
    updateTask,
  };
};

export default useTasks;
