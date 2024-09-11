import { createSlice } from "@reduxjs/toolkit";
import { User } from "../types";

interface State {
  general: { videoFile: File | null; uploadModal: boolean };
}

const initialState: State = {
  general: {
    videoFile: null,
    uploadModal: false,
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

    setUploadModal: (state, action) => {
      state.general.uploadModal = action.payload;
    } 
  },
});

export const { setFile, setUploadModal } = generalSlice.actions;
//@ts-ignore
export const selectGeneral = (state: State) => state.general.general;

export default generalSlice.reducer;
