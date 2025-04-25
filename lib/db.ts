import fs from 'fs/promises';
import path from 'path';

const DB_PATH = path.join(process.cwd(), 'todos.json');

export type Todo = { id: number; title: string; done: boolean };

async function readDB(): Promise<Todo[]> {
    try {
        const data = await fs.readFile(DB_PATH, 'utf-8');
        return JSON.parse(data);
    } catch {
        return [];
    }
}

async function writeDB(todos: Todo[]) {
    await fs.writeFile(DB_PATH, JSON.stringify(todos, null, 2));
}

export async function getTodos() {
    return await readDB();
}

export async function addTodo(todo: Todo) {
    const todos = await readDB();
    todos.push(todo);
    await writeDB(todos);
    return todo;
}

export async function toggleTodo(id: number) {
    const todos = await readDB();
    const updatedTodos = todos.map(t =>
        t.id === id ? { ...t, done: !t.done } : t
    );
    console.log(updatedTodos);
    await writeDB(updatedTodos);
    return updatedTodos.find(t => t.id === id)!;
}
