import { useState } from "react";
import "./TaskInput.css";

function TaskInput({ onAddTask }) {
  const [task, setTask] = useState("");
  const [priority, setPriority] = useState("low"); //Optional priority field

  const handleSubmit = (e) => {
    e.preventDefault();

    if (task.trim() === "") {
      alert("Please enter a task!");
      return;
    }

    // Create a new task object
    const newTask = {
      id: Date.now(),
      task,
      priority,
      completed: false,
    };

    // Pass new task up to parent
    onAddTask(newTask); // Calls the parent function handleAddTask with newTask

    //Reset input fields
    setTask(""); //Reset the input
    setPriority("low");
  };

  return (
    <div className="task-input">
      <form className="task-input-form" onSubmit={handleSubmit}>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter a new task"
        />
        <select value={priority} onChange={(e) => setPriority(e.target.value)}>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
}

export default TaskInput;
