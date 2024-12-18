import React from "react";

function TaskFilters({ filter, setFilter }) {
  return (
    <div className="task-filters">
      <button
        className={`button filter-button ${filter === "all" ? "active" : ""}`}
        onClick={() => setFilter("all")}
      >
        All
      </button>
      <button
        className={`button filter-button ${
          filter === "active" ? "active" : ""
        }`}
        onClick={() => setFilter("active")}
      >
        Active
      </button>
      <button
        className={`button filter-button ${
          filter === "completed" ? "active" : ""
        }`}
        onClick={() => setFilter("completed")}
      >
        Completed
      </button>
    </div>
  );
}

export default TaskFilters;
