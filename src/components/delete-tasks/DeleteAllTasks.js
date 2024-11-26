import "./DeleteAllTasks.css";

function DeleteAllTasks({ onClick }) {
  // Use onClick prop

  return (
    <div className="delete-all-tasks-container">
      <button className="delete-all-tasks-button" onClick={onClick}>
        Delete All Tasks
      </button>
    </div>
  );
}

export default DeleteAllTasks;
