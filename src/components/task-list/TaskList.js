import "./TaskList.css";

function TaskList({ tasks }) {
  return (
    <div className="task-list">
      <div className="task-list-results">
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>
              {task.task} - Priority: {task.priority}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TaskList;
