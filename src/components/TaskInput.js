import { useState } from 'react'

function TaskInput() {
    const [tasks, setTasks] = useState([]);
    const [task, setTask] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setTasks([...tasks, { id: Date.now(), task, priority: "low", completed: false }]);
        setTask("");
    };

    return { handleSubmit }
}

export default TaskInput