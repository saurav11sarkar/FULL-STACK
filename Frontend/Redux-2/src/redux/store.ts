import { configureStore } from "@reduxjs/toolkit";
import taskSlice from "./feature/task/task";

const store = configureStore({
    reducer:{
        todo: taskSlice
    }
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store;