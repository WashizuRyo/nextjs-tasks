import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export interface TaskDocument {
  id: string;
  title: string;
  description: string;
  dueDate: string;
  isCompleted: boolean;
}

export const GET = async () => {
  try {
    const allTasksFromDb = await prisma.task.findMany();

    return NextResponse.json({
      message: "タスク取得成功",
      tasks: allTasksFromDb,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "タスク取得失敗" }, { status: 500 });
  }
};

export const dynamic = "force-dynamic";
