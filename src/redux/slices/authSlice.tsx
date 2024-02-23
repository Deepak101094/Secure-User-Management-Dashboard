// authSlice.ts

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const userToken = localStorage.getItem("token");

interface AuthState {
	token: string | null;
}

const initialState: AuthState = {
	token: userToken,
};

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		setToken: (state, action: PayloadAction<string>) => {
			state.token = action.payload;
		},
	},
});

export const { setToken } = authSlice.actions;
export const selectToken = (state: { auth: AuthState }) => state.auth.token;

export default authSlice.reducer;
