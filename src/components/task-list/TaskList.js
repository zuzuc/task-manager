import "./TaskList.css";

function TaskList({ tasks, setTasks }) {
  const deleteAllTasks = () => {
    setTasks([]); // Clear all tasks
    localStorage.removeItem("tasks"); // Remove from localStorage
  };

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks); // Update state in parent
    localStorage.setItem("tasks", JSON.stringify(updatedTasks)); // Persist changes

    // Alternative Way
    // setTasks([...tasks].filter(task => task.id !== id));
  };

  const toggleTaskCompletion = (id) => {
    const completedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
      );

    setTasks(completedTasks); // Update state in parent
    localStorage.setItem("tasks", JSON.stringify(completedTasks));
  };

  return (
    <ul className="task-list">
      <div className="delete-all-tasks-container">
        <button
          className="delete-all-tasks-button"
          onClick={deleteAllTasks}
        >
          Delete All Tasks
        </button>
      </div>
      {tasks.map((task) => (
        <li className="task-item-container" key={task.id}>
          <div className="task-item">
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTaskCompletion(task.id)}
              aria-label={`Mark ${task.task} as ${task.completed ? "incomplete" : "complete"}`}
            />
            <span
              className={`task-item-label ${
                task.completed ? "line-through" : ""
              }`}
            >
              {task.title}
              {task.task} - Priority: {task.priority}
            </span>
          </div>
          <button className="x-button" onClick={() => deleteTask(task.id)} aria-label={`Delete task ${task.task}`}>
            <svg
              className="x-button-icon"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
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
