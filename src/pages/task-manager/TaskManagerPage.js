import React, { useState } from "react";
import TaskInput from "../../components/task-input/TaskInput";
import TaskList from "../../components/TaskList";

function TaskManagerPage() {
  const [tasks, setTasks] = useState([]);
  const handleAddTask = (newTask) => {
    setTasks((prevTasks) => [...prevTasks, newTask]); // Adds the new task to the tasks array
  };

  return (
    <div className="task-manager-page-content">
      <TaskInput onAddTask={handleAddTask} />
      <TaskList tasks={tasks} />
    </div>
  );
}

export default TaskManagerPage;
