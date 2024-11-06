import './App.css';
import TaskInput from "./components/TaskInput";

function taskManager() {
  return (
    <div className="App">
      <div className="title" style={{ textAlign: 'center' }}>
        <h1>Task Manager</h1>
      </div>
      <TaskInput />
    </div>
  );
}

export default taskManager;
