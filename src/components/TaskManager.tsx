import React from "react";
import "./TaskManager.css";
import useTaskManager from "../hooks/useTaskManager.ts";

export const TaskManager: React.FC = () => {
    const {
        tasks,
        title,
        searchKeyword,
        addTask,
        completeTask,
        updateTask,
        handleSearch,
        setTitle,
    } = useTaskManager();

    const filteredTasks = tasks.filter((task) =>
        task.title.toLowerCase().includes(searchKeyword.toLowerCase())
    );

    return (
        <div className="container">
            <h1>Task Manager</h1>

            <div>
                <input type="text" onChange={handleSearch} placeholder="Search Task"/>
            </div>

            <div className="task">
                <input
                    type="text"
                    value={title}
                    onChange={(ev) => {
                        setTitle(ev.target.value);
                    }}
                />

                <button onClick={addTask}>Add Task</button>
            </div>

            <ul className="container">
                {filteredTasks.map((task) => (
                    <li key={task.id} className="task">
                        <div className="task">
                            <input
                                type="text"
                                placeholder="Add new task"
                                value={task.title}
                                onChange={(e) => updateTask(task.id, {title: e.target.value})}
                            />
                            <button onClick={() => completeTask(task.id)}>Done</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};
