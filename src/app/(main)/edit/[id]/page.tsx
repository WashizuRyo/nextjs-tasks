import { TaskDocument } from "@/app/api/tasks/route";
import EditTaskForm from "@/components/EditTaskForm/EditTaskForm";

interface Params {
  params: { id: string };
}

const getTask = async (id: string): Promise<TaskDocument> => {
  const response = await fetch(`${process.env.API_URL}/tasks/${id}`, {
    cache: "no-store",
  });

  const data = await response.json();
  return data.task as TaskDocument;
};

const EditTaskPage = async ({ params }: Params) => {
  const id = params.id;
  const task = await getTask(id);

  return (
    <div className="flex flex-col justify-center py-20 ">
      <h2 className="text-center text-2xl font-bold">Create New Task</h2>
      <EditTaskForm task={task} />
    </div>
  );
};

export default EditTaskPage;
