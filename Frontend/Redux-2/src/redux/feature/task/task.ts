import { RootState } from "@/redux/store";
import { ITask } from "@/type";
import { createSlice, PayloadAction, nanoid } from "@reduxjs/toolkit";
import { deleteUser } from "../user/user";

interface ITaskState {
  tasks: ITask[];
  filter: "all" | "high" | "medium" | "low";
}

const initialState: ITaskState = {
  tasks: [],
  filter: "all",
};

// type DraftTask = Omit<ITask, "id" | "isCompleted">;
type IDraftTask = Pick<
  ITask,
  "title" | "description" | "dueDate" | "priority" | "assignedTo"
>;

const createTask = (taskData: IDraftTask): ITask => {
  return {
    ...taskData,
    id: nanoid(),
    isCompleted: false,
    assignedTo: taskData.assignedTo || null,
  };
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<IDraftTask>) => {
      const taskData = createTask(action.payload);
      state.tasks.push(taskData);
    },
    toggleCompleteState: (state, action: PayloadAction<string>) => {
      state.tasks.forEach((task) => {
        if (task.id === action.payload) {
          task.isCompleted = !task.isCompleted;
        }
      });
    },
    deleteTask: (state, action: PayloadAction<string>) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    updateFilter: (
      state,
      action: PayloadAction<"all" | "high" | "medium" | "low">
    ) => {
      state.filter = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(deleteUser, (state, action) => {
      state.tasks.forEach((task) => {
        if (task.assignedTo === action.payload) {
          task.assignedTo = null;
        }
      });
    })
  }
});

export const selectTasks = (state: RootState) => {
  const filter = state.todo.filter;
  if (filter === "all") return state.todo.tasks;
  if (filter === "high")
    return state.todo.tasks.filter((task: { priority: string; }) => task.priority === "high");
  if (filter === "medium")
    return state.todo.tasks.filter((task: { priority: string; }) => task.priority === "medium");
  if (filter === "low")
    return state.todo.tasks.filter((task: { priority: string; }) => task.priority === "low");
  return state.todo.tasks;
};

export const selectFilter = (state: RootState) => {
  return state.todo.filter;
};

export const { addTask, toggleCompleteState, deleteTask, updateFilter } =
  taskSlice.actions;

export default taskSlice.reducer;
