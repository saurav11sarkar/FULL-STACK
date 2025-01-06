import { configureStore } from "@reduxjs/toolkit";
import taskSlice from "./feature/task/task";
import userSlice from "./feature/user/user";
import { baseApi } from "./api/baseApi";

const store = configureStore({
  reducer: {
    todo: taskSlice,
    user: userSlice,
    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
