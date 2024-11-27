import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import LandingPage from "./pages/landing-page/LandingPage";
import TaskManagerPage from "./pages/task-manager/TaskManagerPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/task-manager" element={<TaskManagerPage />} />
      </Routes>
    </div>
  );
}

export default App;