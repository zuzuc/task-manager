import "./TaskList.css";

function TaskList({ tasks, setTasks }) {
  const handleDeleteAllTasks = () => {
    setTasks([]); // Clear all tasks
    localStorage.removeItem("tasks"); // Remove from localStorage
  };

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks); // Update state in parent
    localStorage.setItem("tasks", JSON.stringify(updatedTasks)); // Persist changes
  };

  return (
    <ul className="task-list">
      <div className="delete-all-tasks-container">
        <button className="delete-all-tasks-button" onClick={handleDeleteAllTasks}>
          Delete All Tasks
        </button>
      </div>
      {tasks.map((task) => (
        <li className="task-item-container" key={task.id}>
          <div className="task-item">
            <input type="checkbox" />
            <span className="task-item-label">{task.title}</span>
            {task.task} - Priority: {task.priority}
          </div>
          <button className="x-button" onClick={() => deleteTask(task.id)}>
            <svg
              className="x-button-icon"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
