import { useState } from "react";
import './App.css';
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";

function TaskManager() {
  const [tasks, setTasks] = useState([]);
  const handleAddTask = (newTask) => {
    setTasks((prevTasks) => [...prevTasks, newTask]); // Adds the new task to the tasks array
};

  return (
    <div>
      <div className="title" style={{ textAlign: 'center' }}>
        <h1>Task Manager</h1>
      </div>
      <TaskInput onAddTask={handleAddTask}/>
      <TaskList tasks={tasks} />
    </div>
  );
}

export default TaskManager;
