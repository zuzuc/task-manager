import React from "react";
import "./TaskManagerPage.css";
import { useTasks } from "../../hooks/useTasks";
import TaskInput from "../../components/task-input/TaskInput";
import TaskList from "../../components/task-list/TaskList";

function TaskManagerPage() {
  const {
    tasks,
    setTasks,
    deleteSingleTask,
    deleteAllTasks,
    toggleTaskCompletion,
  } = useTasks();

  const handleAddTask = (newTask) => {
    setTasks((prevTasks) => [...prevTasks, newTask]); // Adds the new task to the tasks array
  };

  return (
    <div className="task-manager-container">
      <div className="task-manager">
        <h1>Task Manager</h1>
        <TaskInput onAddTask={handleAddTask} />
        <TaskList
          tasks={tasks}
          deleteSingleTask={deleteSingleTask}
          deleteAllTasks={deleteAllTasks}
          toggleTaskCompletion={toggleTaskCompletion}
        />
      </div>
    </div>
  );
}

export default TaskManagerPage;
