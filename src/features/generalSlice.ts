import { createSlice } from "@reduxjs/toolkit";
import { User } from "../types";

interface State {
  general: { videoFile: File | null };
}

const initialState: State = {
  general: {
    videoFile: null,
  },
};

export const generalSlice = createSlice({
  name: "general",
  initialState,
  reducers: {
    setFile: (state, action) => {
      state.general.videoFile = action.payload;
      console.log(action.payload);
    },
  },
});

export const { setFile } = generalSlice.actions;
//@ts-ignore
export const selectFile = (state: State) => state.general;

export default generalSlice.reducer;
