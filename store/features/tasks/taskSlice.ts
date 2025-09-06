import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface taskState {
  value: string;
}

const initialState: taskState = {
  value: "",
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    setTask: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { setTask } = taskSlice.actions;
