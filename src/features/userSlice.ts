import { createSlice } from "@reduxjs/toolkit";
import { User } from "../types";

interface State {
  user: User | null;
}

const initialState: State = {
  user: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

export const { login, logout } = userSlice.actions;
//@ts-ignore
export const selectUser = (state: State) => state.user.user as User;

export default userSlice.reducer;
