import { TaskDocument } from "@/app/api/tasks/route";
import TaskCard from "@/components/TaskCard/TaskCard";

export const getCompletedTask = async (): Promise<TaskDocument[]> => {
  const response = await fetch(`${process.env.API_URL}/tasks/completed`, {
    cache: "no-store",
  });

  if (response.status !== 200) {
    throw new Error();
  }

  const data = await response.json();
  return data.tasks;
};

const CompletedTaskPage = async () => {
  const allCompletedTask = await getCompletedTask();
  return (
    <div className="text-gray-800 p-8 h-full overflow-auto pb-24">
      <header className="flex justify-between items-center">
        <h1 className="text-2xl font-bold flex items-center">
          Completed Tasks
        </h1>
      </header>
      <div className="mt-8 flex flex-wrap gap-4">
        {allCompletedTask.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default CompletedTaskPage;
