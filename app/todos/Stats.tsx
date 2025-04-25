import { getTodos } from '@/lib/db';

const sleep = (ms: number) => new Promise(r => setTimeout(r, ms));

export default async function Stats() {
    await sleep(100);
    const todos = await getTodos();
    const total   = todos.length;
    const done    = todos.filter(t => t.done).length;
    const pending = total - done;

    return (
        <aside className="mb-8 rounded border p-4 bg-gray-50">
            <h2 className="font-semibold mb-2">Статистика</h2>
            <ul className="space-y-1 text-sm">
                <li>Всего: {total}</li>
                <li>Выполнено: {done}</li>
                <li>Осталось: {pending}</li>
            </ul>
        </aside>
    );
}
