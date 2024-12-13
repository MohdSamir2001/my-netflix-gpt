import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
  },
  reducers: {
    addUser: (state, action) => {
      state.user = action.payload;
    },
    removeUser: (state) => {
      state.user = null;
    },
  },
});
export const { addUser, removeUser } = userSlice.actions;
export default userSlice.reducer;

/** 
We Can Made By This Only For User
import { createSlice } from "@reduxjs/toolkit";
const userSlice = createSlice({
  name: "user",
  initialState: null,  // Initial state ko null kar diya
  reducers: {
    addUser: (state, action) => {
      return action.payload;  // State ko directly update karenge, kyunki yeh ab ek object nahi, ek value hai
    },
    removeUser: () => {
      return null;  // State ko null set karenge
    },
  },
});

export const { addUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
 */
