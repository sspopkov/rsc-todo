'use client';
import { useState, useTransition, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import { useTodos } from './Context';
import * as actions from './actions';

export default function TodoList() {
    const router = useRouter();
    const { todos, setTodos } = useTodos();
    const [title, setTitle]   = useState('');
    const [isPending, start]  = useTransition();

    async function onSubmit(e: FormEvent) {
        e.preventDefault();
        const value = title;
        setTitle('');

        setTodos(prev => [...prev, { id: Date.now(), title: value, done: false }]);

        start(async () => {
            await actions.createTodo(value);
            router.refresh();
        });
    }

    function onToggle(id: number) {
        setTodos(prev => prev.map(t => (t.id === id ? { ...t, done: !t.done } : t)));
        start(async () => {
            await actions.switchTodo(id);
            router.refresh();
        });
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
