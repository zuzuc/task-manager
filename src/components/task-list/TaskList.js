import "./TaskList.css";

function TaskList({ tasks }) {
  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <li className="task-item-container" key={task.id}>
          <div className="task-item">
            <input type="checkbox" />
            <span className="task-item-label">{task.title}</span>
            {task.task} - Priority: {task.priority}
          </div>
          <button className="x-button">
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
