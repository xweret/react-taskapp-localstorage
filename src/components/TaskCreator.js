import { useState } from "react";
export const TaskCreator = (props) => {
    const [newTaskName, setNewTaskName] = useState(" ");

    const handleSubmit = (e) => {
        e.preventDefault();
        props.createNewTask(newTaskName)
        localStorage.setItem("Tasks", newTaskName);
        setNewTaskName("");
    };

    return (
    <form onSubmit={handleSubmit}>
    <input
        type="text"
        placeholder="Enter a new Task"
        value={newTaskName}
        onChange={(e) => setNewTaskName(e.target.value)}
    />
    <button>Save task</button>
    </form>
    );
};

export default TaskCreator;
