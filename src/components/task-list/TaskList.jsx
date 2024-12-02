import "./TaskList.css";

function TaskList({
  tasks,
  deleteSingleTask,
  deleteAllTasks,
  toggleTaskCompletion,
}) {
  const handleTaskToggle = (id) => () => toggleTaskCompletion(id);
  const handleTaskDelete = (id) => () => deleteSingleTask(id);

  return (
    <ul className="task-list">
      <div className="delete-all-tasks-container">
        <button className="delete-all-tasks-button" onClick={deleteAllTasks}>
          Delete All Tasks
        </button>
      </div>
      {tasks.map((task) => (
        <li className="task-item-container" key={task.id}>
          <div className="task-item">
            <input
              type="checkbox"
              checked={task.completed}
              onChange={handleTaskToggle(task.id)}
              aria-label={`Mark ${task.task} as ${
                task.completed ? "incomplete" : "complete"
              }`}
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
          <button
            className="x-button"
            onClick={handleTaskDelete(task.id)}
            aria-label={`Delete task ${task.task}`}
          >
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
