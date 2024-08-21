import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice";
import generalSlice from "../features/generalSlice";

export default configureStore({
  reducer: {
    user: userReducer,
    general: generalSlice
  },
});
