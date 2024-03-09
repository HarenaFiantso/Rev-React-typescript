import React from "react";

export interface Task {
    id: string;
    title: string;
}

export interface TaskManagerHook {
    tasks: Task[];
    title: string;
    searchKeyword: string;
    addTask: () => void;
    completeTask: (id: string) => void;
    updateTask: (id: string, updatedTask: Partial<Task>) => void;
    handleSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
    setTitle: React.Dispatch<React.SetStateAction<string>>;
}