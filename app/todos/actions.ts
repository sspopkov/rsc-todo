'use server';
import { addTodo, Todo, toggleTodo } from '@/lib/db';
import { revalidatePath } from 'next/cache';

export async function createTodo(todo: Todo) {
    if (!todo.title.trim()) return;
    await addTodo(todo);
    revalidatePath('page');
}

export async function switchTodo(id: number) {
    await toggleTodo(id);
    revalidatePath('page');
}
