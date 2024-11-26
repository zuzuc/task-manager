import "./DeleteAllTasks.css";

function DeleteAllTasks({ onClick }) { // Use onClick prop

  return (
    <button className="delete-all-tasks-button" onClick={onClick}>
      Delete All Tasks
    </button>
  );
}

export default DeleteAllTasks;
