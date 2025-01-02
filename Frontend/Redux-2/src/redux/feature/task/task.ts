import { RootState } from "@/redux/store";
import { ITask } from "@/type";
import { createSlice } from "@reduxjs/toolkit";

interface ITaskState {
  tasks: ITask[];
  filter: "all" | "high" | "medium" | "low";
}

const initialState: ITaskState = {
  tasks: [
    {
      id: 1,
      title: "Task Title",
      description: "Description of the task.",
      dueDate: "2025-01-02",
      isCompleted: false,
      priority: "medium",
    },
    {
      id: 2,
      title: "Prepare Presentation",
      description: "Prepare slides for the Q1 review meeting.",
      dueDate: "2025-01-15",
      isCompleted: false,
      priority: "high",
    },
    {
      id: 3,
      title: "Grocery Shopping",
      description: "Buy groceries for the week.",
      dueDate: "2025-01-03",
      isCompleted: false,
      priority: "medium",
    },
    {
      id: 4,
      title: "Doctor's Appointment",
      description: "Annual check-up appointment with Dr. Smith.",
      dueDate: "2025-01-10",
      isCompleted: false,
      priority: "high",
    },
    {
      id: 5,
      title: "Read Book",
      description: "Read 'Atomic Habits' by James Clear.",
      dueDate: "2025-01-20",
      isCompleted: false,
      priority: "low",
    },
    {
      id: 6,
      title: "Workout Session",
      description: "Attend the weekly gym session.",
      dueDate: "2025-01-05",
      isCompleted: false,
      priority: "medium",
    },
  ],
  filter: "all",
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {},
});

export const selectTasks = (state: RootState) => {
  return state.todo.tasks;
};

export const selectFilter = (state: RootState) => {
  return state.todo.filter;
};

export default taskSlice.reducer;
