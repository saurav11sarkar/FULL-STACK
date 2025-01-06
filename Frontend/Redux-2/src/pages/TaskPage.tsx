import { AddTaskModel } from "@/components/module/tasks/AddTaskModel";
import TaskCard from "@/components/module/tasks/TaskCard";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useGetTasksQuery } from "@/redux/api/baseApi";
import {  updateFilter } from "@/redux/feature/task/task";
import { useAppDispatch } from "@/redux/hook";
import { ITask } from "@/type";

const TaskPage = () => {
  // const tasks = useAppSelector(selectTasks);
  const dispatch = useAppDispatch();
  const {data,isLoading,isError,} = useGetTasksQuery(undefined,{
    // pollingInterval: 1000
    refetchOnFocus: true,
    refetchOnMountOrArgChange: true,
    refetchOnReconnect: true,
  });

  console.log({data,isLoading,isError});
  if(isLoading){
    <p>Loading.....</p>
  }


  return (
    <div className="mx-auto max-w-7xl px-5 mt-20">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold ">Tasks</h2>
        <Tabs defaultValue="all" >
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger
              onClick={() => dispatch(updateFilter("all"))}
              value="all"
            >
              All
            </TabsTrigger>
            <TabsTrigger
              onClick={() => dispatch(updateFilter("high"))}
              value="high"
            >
              High
            </TabsTrigger>
            <TabsTrigger
              onClick={() => dispatch(updateFilter("medium"))}
              value="medium"
            >
              Medium
            </TabsTrigger>
            <TabsTrigger
              onClick={() => dispatch(updateFilter("low"))}
              value="low"
            >
              Low
            </TabsTrigger>
          </TabsList>
        </Tabs>
        <AddTaskModel></AddTaskModel>
      </div>
      <div className="space-y-4 mt-5">
        {!isLoading && data.tasks.map((task:ITask) => (
          <TaskCard key={task.id } task={task} />
        ))}
      </div>
    </div>
  );
};

export default TaskPage;
