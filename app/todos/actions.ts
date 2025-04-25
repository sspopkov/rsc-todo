'use server';
import { addTodo, toggleTodo } from '@/lib/data';
import { revalidatePath } from 'next/cache';

export async function createTodo(title: string) {
    if (!title.trim()) return;
    await addTodo(title);
    revalidatePath('/todos', 'page');
}

export async function switchTodo(id: number) {
    await toggleTodo(id);
    revalidatePath('/todos');
}
