import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	loading: false,
};

export const homeSlice = createSlice({
	name: "home",
	initialState,
	reducers: {
		setLoading: (state, action) => {
			state.loading = action.payload;
		},
	},
});

const { actions, reducer } = homeSlice;
export const { setLoading } = actions;

export default reducer;
