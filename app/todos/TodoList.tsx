'use client';
import { useState, useTransition, FormEvent } from 'react';
import { useTodos } from './Context';
import * as actions from './actions';

export default function TodoList() {
    const { todos, setTodos } = useTodos();
    const [title, setTitle]   = useState('');
    const [isPending, start]  = useTransition();

    function onSubmit(e: FormEvent) {
        e.preventDefault();
        const value = title;
        setTitle('');

        const optimistic = { id: Date.now(), title: value, done: false };
        setTodos(prev => [...prev, optimistic]);

        start(() => actions.createTodo(optimistic));
    }

    function onToggle(id: number) {
        setTodos(prev =>
            prev.map(t => (t.id === id ? { ...t, done: !t.done } : t)),
        );
        start(() => actions.switchTodo(id));
    }

    return (
        <>
            <form onSubmit={onSubmit} className="mb-4 flex gap-2">
                <input
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    placeholder="Новая задача"
                    className="border p-2 flex-1"
                />
                <button
                    disabled={isPending}
                    className="bg-blue-600 px-4 py-2 text-white disabled:opacity-50"
                >
                    Добавить
                </button>
            </form>

            <ul className="space-y-2">
                {todos.map(t => (
                    <li
                        key={t.id}
                        className={
                            'cursor-pointer select-none ' +
                            (t.done ? 'line-through text-gray-400' : '')
                        }
                        onClick={() => onToggle(t.id)}
                    >
                        {t.title}
                    </li>
                ))}
            </ul>
        </>
    );
}
