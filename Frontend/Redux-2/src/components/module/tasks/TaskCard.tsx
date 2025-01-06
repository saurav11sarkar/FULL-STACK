import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";
import {
  deleteTask,
  toggleCompleteState,
} from "@/redux/feature/task/task";
import { selectorUser } from "@/redux/feature/user/user";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { ITask } from "@/type";
import { Trash2 } from "lucide-react";

interface IProps {
  task: ITask;
}

const TaskCard = ({ task }: IProps) => {
  const users = useAppSelector(selectorUser);
  const dispatch = useAppDispatch();
  const assignedTo = users.find((user) => user.id === task.assignedTo);
  return (
    <div className="border px-4 py-4 rounded-lg shadow-md">
      <div className="flex justify-between items-start">
        <div className="flex items-center gap-4">
          <div
            className={cn(
              "w-4 h-4 flex items-center justify-center rounded-full bg-gray-200",
              {
                "bg-green-500 text-white font-bold": task.priority === "low",
                "bg-yellow-500 text-white font-bold":
                  task.priority === "medium",
                "bg-red-500 text-white font-bold": task.priority === "high",
              }
            )}
          >
            {/* {task.title.charAt(0).toUpperCase()} */}
          </div>
          <div>
            <h3
              className={cn(
                { "line-through": task.isCompleted },
                { "text-lg font-semibold text-gray-600": true }
              )}
            >
              {task.title}
            </h3>
            <p className="text-sm text-gray-500">Due: {task.dueDate}</p>
            
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={() => dispatch(deleteTask(task.id))}
            className="p-1  text-red-500 hover:bg-red-100 rounded-md"
          >
            <Trash2 />
          </button>
          <Checkbox onClick={() => dispatch(toggleCompleteState(task.id))} />
        </div>
      </div>
      <p className="text-sm text-gray-500">Assignd To: {assignedTo?.name || "Unassigned"}</p>
      <p className="mt-3 text-gray-700">{task.description}</p>
    </div>
  );
};

export default TaskCard;
