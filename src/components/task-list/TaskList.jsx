import "./TaskList.css";

function TaskList({
  tasks,
  onDeleteSingleTask,
  onDeleteAllTasks,
  onToggleTaskCompletion,
  onMarkAsEditing,
  onUpdateTask,
}) {
  const handleTaskToggle = (id) => () => onToggleTaskCompletion(id);
  const handleTaskDelete = (id) => () => onDeleteSingleTask(id);
  const handleTaskEditing = (id) => () => onMarkAsEditing(id);
  const validateAndSaveTask = (id, value, fallbackValue, onUpdateTask) => {
    const trimmedValue = value.trim();
    if (trimmedValue.length === 0) {
      onUpdateTask(id, { task: fallbackValue, editing: false });
    } else {
      onUpdateTask(id, { task: trimmedValue, editing: false });
    }
  };

  const handleTaskUpdate = (id, fallbackValue) => (event) => {
    if (event.nativeEvent.key === "Enter") {
      validateAndSaveTask(id, event.target.value, fallbackValue, onUpdateTask);
    }
  };

  const handleTaskBlur = (id, fallbackValue) => (event) => {
    validateAndSaveTask(id, event.target.value, fallbackValue, onUpdateTask);
  };

  return (
    <ul className="task-list">
      <div className="delete-all-tasks-container">
        <button className="delete-all-tasks-button" onClick={onDeleteAllTasks}>
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
                onKeyUp={handleTaskUpdate(task.id, task.task)} // Pass the saved task as fallback
                onBlur={handleTaskBlur(task.id, task.task)} // Pass the saved task as fallback
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
