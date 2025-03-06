import { useState } from "react";
import { Task } from "./../../Task.js";
import "./TaskInput.css";

function TaskInput({ onAddTask }) {
  const [taskName, setTaskName] = useState("");
  const [priority, setPriority] = useState("low"); //Optional priority field

  const handleTaskChange = (e) => {
    setTaskName(e.target.value);
  };

  const handlePriorityChange = (e) => {
    setPriority(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Don´t want user to add empty strings
    // If task is empty alert the user and cancel
    if (taskName.trim() === "") {
      alert("Please enter a task!");
      return;
    }

    // Create a new task object
    const newTask = new Task(
      Date.now(),
      taskName,
      priority,
      // @todo Fix it to use the correct date
      // or let the db do it
      "2025-03-06 10:37:27",
      null,
      false
    );

    // Pass new task up to parent
    onAddTask(newTask);

    // Reset input fields
    setTaskName(""); // Reset task input
    setPriority("low"); // Reset priority to default
  };

  return (
    <form className="task-input-form" onSubmit={handleSubmit}>
      <label htmlFor="task">
        <input
          id="task"
          type="text"
          className="task-input"
          value={taskName}
          onChange={handleTaskChange}
          placeholder="Enter a new task"
          aria-required="true"
        />
      </label>
      <label htmlFor="priority">
        <select
          id="priority"
          className="priority-select"
          value={priority}
          onChange={handlePriorityChange}
          aria-label="Select priority level"
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </label>
      <button type="submit" className="add-task-button">
        Add Task
      </button>
    </form>
  );
}

export default TaskInput;
