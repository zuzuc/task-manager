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

    // Alternative Way
    // setTasks([...tasks].filter(task => task.id !== id));
  };

  const completeTask = (id) => {
    const completedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    console.log(completedTasks);
    // const completedTasks = tasks.map((task) => {
    //   if (task.id === id) {
    //     task.completed = !task.completed;
    //   }
    //   return task;
    // });

    setTasks(completedTasks); // Update state in parent
    localStorage.setItem("tasks", JSON.stringify(completedTasks));
  };

  return (
    <ul className="task-list">
      <div className="delete-all-tasks-container">
        <button
          className="delete-all-tasks-button"
          onClick={handleDeleteAllTasks}
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
              onChange={() => completeTask(task.id)}
            />
            <span
              className={`task-item-label ${
                task.completed ? "line-through" : ""
              }`}
            >
              {task.title}
              {task.task} - Priority: {task.priority}
            </span>
            {/* {task.task} - Priority: {task.priority} */}
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
