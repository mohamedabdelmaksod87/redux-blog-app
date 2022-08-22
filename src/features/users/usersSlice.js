import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "1", name: "Mohamed" },
  { id: "2", name: "Ali" },
  { id: "3", name: "Wael" },
];

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export const selectAllUsers = (state) => state.users;

export default usersSlice.reducer;
