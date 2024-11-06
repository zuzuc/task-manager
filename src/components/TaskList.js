function TaskList({ tasks }) {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          {task.task} - Priority: {task.priority}
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
