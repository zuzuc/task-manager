import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import LandingPage from "./pages/landing-page/LandingPage";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);
  const handleAddTask = (newTask) => {
    setTasks((prevTasks) => [...prevTasks, newTask]); // Adds the new task to the tasks array
  };

  return (
    <div>
      <div className="title" style={{ textAlign: "center" }}>
        <h1>Task Manager</h1>
      </div>
      <main>
        <Routes>
          <Route exact path="/" element={LandingPage}>
            <LandingPage />
          </Route>
          <Route exact path="/TaskInput" element={TaskInput}>
            <TaskInput onAddTask={handleAddTask} />
          </Route>
          <Route exact path="/TaskInput" element={TaskInput}>
            <TaskList tasks={tasks} />
          </Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
