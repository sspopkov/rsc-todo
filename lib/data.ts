export type Todo = { id: number; title: string; done: boolean };

let todos: Todo[] = [
    { id: 1, title: 'Изучить RSC', done: false },
    { id: 2, title: 'Сделать кофе', done: true },
];

export async function getTodos() {
    return todos;
}

export async function addTodo(title: string) {
    const newTodo: Todo = { id: Date.now(), title, done: false };
    todos = [...todos, newTodo];
    return newTodo;
}

export async function toggleTodo(id: number) {
    todos = todos.map(t => (t.id === id ? { ...t, done: !t.done } : t));
    return todos.find(t => t.id === id)!;
}
