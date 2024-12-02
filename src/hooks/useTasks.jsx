import { useState, useEffect } from "react";

export function useTasks(initialTasks = []) {
  const [tasks, setTasks] = useState(() => {
    try {
      const savedTasks = localStorage.getItem("tasks");
      return savedTasks ? JSON.parse(savedTasks) : initialTasks;
    } catch (error) {
      console.error("Failed to parse tasks from localStorage:", error);
      return initialTasks;
    }
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const deleteAllTasks = () => setTasks([]);
  const deleteSingleTask = (id) => setTasks(tasks.filter((task) => task.id !== id));
  const toggleTaskCompletion = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };
  return { tasks, setTasks, deleteAllTasks, deleteSingleTask, toggleTaskCompletion };
}
