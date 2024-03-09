import {useState} from "react";
import {Task} from "../types/TaskManager.ts";
import {nanoid} from "nanoid";

const useTaskManager = () => {
    const [title, setTitle] = useState<string>("");
    const [searchKeyword, setSearchKeyword] = useState<string>("");
    const [tasks, setTasks] = useState<Task[]>([]);

    const completeTask = (id: string): void => {
        setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
    };

    const updateTask = (id: string, updatedTask: Partial<Task>): void => {
        setTasks((prevTasks) =>
            prevTasks.map((task) => (task.id === id ? {...task, ...updatedTask} : task))
        );
    };

    const addTask = (): void => {
        if (title.length < 1) {
            return;
        }

        const newTask: Task = {
            id: nanoid(),
            title,
        };
        setTasks((prevTasks) => [...prevTasks, newTask]);
        setTitle("");
    };

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setSearchKeyword(event.target.value);
    };

    return {
        tasks,
        title,
        searchKeyword,
        addTask,
        completeTask,
        updateTask,
        handleSearch,
        setTitle,
    };
}

export default useTaskManager;