import React from "react";

function TaskItemsRemaining({ remainingCount }) {
  return (
    <div className="tasks-remaining">
      <span>{remainingCount}</span> task{remainingCount !== 1 ? "s" : ""}{" "}
      remaining
    </div>
  );
}

export default TaskItemsRemaining;
