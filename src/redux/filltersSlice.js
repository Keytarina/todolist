import { createSlice } from "@reduxjs/toolkit";

const filltersSlice = createSlice({
	name: "filter",
	initialState: { status: "all" },
	reducers: {
		setStatusFilter: (state, action) => {
			state.status = action.payload;
		},
	},
});

export const { setStatusFilter } = filltersSlice.actions;
export default filltersSlice.reducer;
