import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PromptState {
  value: string;
}

const initialState: PromptState = {
  value: "",
};

const promptSlice = createSlice({
  name: "prompt",
  initialState,
  reducers: {
    setPrompt: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { setPrompt } = promptSlice.actions;
export default promptSlice.reducer;
