import { getTodos } from '@/lib/db';
import TodoList from './todos/TodoList';
import { TodoProvider } from './todos/Context';
import Stats from './todos/Stats';

export const metadata = { title: 'Advanced Todo | RSC demo' };

export default async function TodoPage() {
    const todos = await getTodos();

    return (
        <section className="max-w-xl mx-auto p-8">
            <h1 className="text-2xl font-bold mb-6">RSC + Actions + Suspense</h1>
            <Stats key={todos.length} />
            <TodoProvider initial={todos}>
                <TodoList />
            </TodoProvider>
        </section>
    );
}
