import "./TaskList.css";

function TaskList({ tasks }) {
  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <li className="task-item-container" key={task.id}>
          <input type="checkbox" />
          <span className="task-item-label"></span>
          {task.task} - Priority: {task.priority}
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
