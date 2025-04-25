'use client';
import React, { createContext, useContext, useState } from 'react';
import { Todo } from '@/lib/data';

type TodoContextType = {
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const TodoContext = createContext<TodoContextType | undefined>(undefined);

export function useTodos() {
    const ctx = useContext(TodoContext);
    if (!ctx) throw new Error('useTodos must be inside <TodoProvider>');
    return ctx;
}

export function TodoProvider({ initial, children }: { initial: Todo[]; children: React.ReactNode }) {
    const [todos, setTodos] = useState<Todo[]>(initial);
    return (
        <TodoContext.Provider value={{ todos, setTodos }}>
            {children}
        </TodoContext.Provider>
    );
}