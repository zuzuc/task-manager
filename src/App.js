import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import LandingPage from "./pages/landing-page/LandingPage";
import TaskInput from "./components/task-input/TaskInput";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);
  const handleAddTask = (newTask) => {
    setTasks((prevTasks) => [...prevTasks, newTask]); // Adds the new task to the tasks array
  };

  return (
    <div>
      <main>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/task-input" element={<TaskInput onAddTask={handleAddTask} />} />
          <Route path="/task-list" element={<TaskList tasks={tasks} />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
