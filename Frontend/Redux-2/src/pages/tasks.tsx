
import { AddTaskModel } from "@/components/module/tasks/AddTaskModel";
import TaskCard from "@/components/module/tasks/TaskCard";
import { selectFilter, selectTasks } from "@/redux/feature/task/task";
import { useAppSelector } from "@/redux/hook";

const Tasks = () => {
  const tasks = useAppSelector(selectTasks);
  const filter = useAppSelector(selectFilter);

  const filteredTasks =
    filter === "all"
      ? tasks
      : tasks.filter((task) => task.priority === filter);

  return (
    <div className="mx-auto max-w-7xl px-5 mt-20">
      <div className="flex items-center justify-between">
      <h2 className="text-xl font-bold">Tasks</h2>
      <AddTaskModel></AddTaskModel>
      </div>
      <div className="space-y-4 mt-5">
        {filteredTasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default Tasks;