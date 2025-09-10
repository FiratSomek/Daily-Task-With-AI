import { configureStore } from "@reduxjs/toolkit";
import promptReducer from "./features/prompts/promptSlice";
import taskReducer from "./features/tasks/taskSlice";

export const store = configureStore({
  reducer: {
    prompt: promptReducer,
    task: taskReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
