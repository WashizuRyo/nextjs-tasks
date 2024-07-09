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
  const nowDate = new Date().toISOString().split("T")[0];
  try {
    const allTasksFromDb = await prisma.task.findMany({
      where: {
        dueDate: {
          lt: nowDate,
        },
        isCompleted: false,
      },
    });

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
