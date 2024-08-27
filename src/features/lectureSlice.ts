import { createSlice } from "@reduxjs/toolkit";
import { Lecture } from "../types";

interface State {
  lectures: Lecture[];
}

const initialState: State = {
  lectures: [],
};

export const lectureSlice = createSlice({
  name: "lectures",
  initialState,
  reducers: {
    setLectures: (state, action) => {
      state.lectures = action.payload;
    }
  },
});

export const { setLectures } = lectureSlice.actions;
//@ts-ignore
export const selectLectures = (state: State) => state.lectures.lectures as Lecture[];

export default lectureSlice.reducer;
