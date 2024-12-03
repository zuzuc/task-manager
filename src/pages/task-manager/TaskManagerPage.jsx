import React from "react";
import "./TaskManagerPage.css";
import useTasks from "../../hooks/useTasks";
import TaskInput from "../../components/task-input/TaskInput";
import TaskList from "../../components/task-list/TaskList";

function TaskManagerPage() {
  const {
    tasks,
    addTask,
    deleteSingleTask,
    deleteAllTasks,
    toggleTaskCompletion,
    markAsEditing,
    updateTask,
  } = useTasks();

  return (
    <div className="task-manager-container">
      <div className="task-manager">
        <h1>Task Manager</h1>
        <TaskInput onAddTask={addTask} />
        <TaskList
          tasks={tasks}
          onDeleteSingleTask={deleteSingleTask}
          onDeleteAllTasks={deleteAllTasks}
          onToggleTaskCompletion={toggleTaskCompletion}
          onMarkAsEditing={markAsEditing}
          onUpdateTask={updateTask}
        />
      </div>
    </div>
  );
}

export default TaskManagerPage;
