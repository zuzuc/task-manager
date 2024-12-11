import React from "react";
import "./TaskManagerPage.css";
import useTasks from "../../hooks/useTasks";
import TaskInput from "../../components/task-input/TaskInput";
import TaskList from "../../components/task-list/TaskList";
import NoTasks from "../../components/no-tasks-display/NoTasks";

function TaskManagerPage() {
  const {
    sortedTasks,
    addTask,
    deleteSingleTask,
    deleteAllTasks,
    toggleTaskCompletion,
    updateTask,
    remainingTasks,
  } = useTasks();

  return (
    <div className="task-manager-container">
      <div className="task-manager">
        <h1>Task Manager</h1>
        <TaskInput onAddTask={addTask} />
        {sortedTasks.length > 0 ? (
          <TaskList
            tasks={sortedTasks}
            onDeleteSingleTask={deleteSingleTask}
            onDeleteAllTasks={deleteAllTasks}
            onToggleTaskCompletion={toggleTaskCompletion}
            onUpdateTask={updateTask}
            onRemainingTasks={remainingTasks}
          />
        ) : (
          <NoTasks />
        )}
      </div>
    </div>
  );
}

export default TaskManagerPage;
