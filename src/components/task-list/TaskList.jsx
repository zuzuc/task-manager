import "./TaskList.css";

function TaskList({
  tasks,
  deleteSingleTask,
  deleteAllTasks,
  toggleTaskCompletion,
  markAsEditing,
  updateTask,
}) {
  const handleTaskToggle = (id) => () => toggleTaskCompletion(id);
  const handleTaskDelete = (id) => () => deleteSingleTask(id);
  const handleTaskEditing = (id) => () => markAsEditing(id);
  const handleTaskUpdate = (id) => (event) => updateTask(id, { task: event.target.value });
  const handleTaskBlur = (id) => (event) => updateTask(id, { task: event.target.value });

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
              checked={task.completed ? true : false}
              onChange={handleTaskToggle(task.id)}
              aria-label={`Mark ${task.task} as ${
                task.completed ? "incomplete" : "complete"
              }`}
            />
            {!task.editing ? (
              <span
                onDoubleClick={handleTaskEditing(task.id)}
                className={`task-item-label ${
                  task.completed ? "line-through" : ""
                }`}
              >
                {task.title}
                {task.task} - Priority: {task.priority}
              </span>
            ) : (
              <input
                type="text"
                className="task-item-input"
                defaultValue={task.task}
                onChange={handleTaskUpdate(task.id)}
                onBlur={handleTaskBlur(task.id)}
                autoFocus
              />
            )}
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
