// Stats.tsx
import { getTodos } from '@/lib/data';

const sleep = (ms: number) => new Promise(r => setTimeout(r, ms));

async function fetchTodos() {
    await sleep(2000);
    return getTodos();
}

export default async function Stats() {
    const todos = await fetchTodos();

    const total = todos.length;
    const done = todos.filter(t => t.done).length;
    const pending = total - done;

    return (
        <aside key={todos.length} className="mb-8 rounded border p-4 bg-gray-50">
            <h2 className="font-semibold mb-2">Статистика</h2>
            <ul className="space-y-1 text-sm">
                <li>Всего: {total}</li>
                <li>Выполнено: {done}</li>
                <li>Осталось: {pending}</li>
            </ul>
        </aside>
    );
}
