"use server";
import prisma from "@/lib/prisma";
import { redirect } from "next/navigation";

export interface FormState {
  error: string;
}

interface Task {
  title: string;
  dueDate: string;
  description: string;
  isCompleted: boolean;
}

/// testｓ

export const createTask = async (state: FormState, formData: FormData) => {
  const newTask: Task = {
    title: formData.get("title") as string,
    description: formData.get("description") as string,
    dueDate: formData.get("dueDate") as string,
    isCompleted: false,
  };

  try {
    await prisma.task.create({
      data: {
        title: newTask.title,
        description: newTask.description,
        dueDate: newTask.dueDate,
        isCompleted: newTask.isCompleted,
      },
    });
  } catch (error) {
    state.error = "タスクの作成に失敗しました";
  }

  redirect("/");
};

export const updateTask = async (
  id: string,
  state: FormState,
  formData: FormData
) => {
  const updateTask: Task = {
    title: formData.get("title") as string,
    description: formData.get("description") as string,
    dueDate: formData.get("dueDate") as string,
    isCompleted: Boolean(formData.get("isCompleted")),
  };

  try {
    await prisma.task.update({
      where: { id },
      data: {
        title: updateTask.title,
        description: updateTask.description,
        dueDate: updateTask.dueDate,
        isCompleted: updateTask.isCompleted,
      },
    });
  } catch (error) {
    state.error = "タスクの更新に失敗しました";
  }

  redirect("/");
};

export const deleteTask = async (id: string, state: FormState) => {
  try {
    await prisma.task.delete({
      where: { id },
    });
  } catch (error) {
    state.error = "タスクの削除に失敗しました";
  }

  redirect("/");
};
