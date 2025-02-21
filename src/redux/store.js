import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "./tasksSlice";
import filtersReducer from "./filltersSlice";

export const store = configureStore({
	reducer: {
		tasks: tasksReducer,
		filters: filtersReducer,
	},
});
