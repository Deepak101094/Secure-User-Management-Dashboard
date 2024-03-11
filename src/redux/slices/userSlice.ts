import { createSlice } from "@reduxjs/toolkit";

// type IUsers = {
// 	id: number,
//     first_name: string;
//     last_name: string;
//     email: string;
//     avatar: string;
// }
const initialState = {
	users: [],
};
const userSlice = createSlice({
	name: "users",
	initialState,
	reducers: {
		setUserData: (state, action) => {
			state.users = action.payload;
		},
	},
});

export const { setUserData } = userSlice.actions;
export default userSlice.reducer;
