import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice";
import generalSlice from "../features/generalSlice";
import lectureSlice from "../features/lectureSlice";

export default configureStore({
  reducer: {
    user: userReducer,
    general: generalSlice,
    lectures:lectureSlice
  },
});
