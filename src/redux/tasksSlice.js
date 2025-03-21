import { createSlice } from "@reduxjs/toolkit";
import { fetchTasks, addTask, deleteTask, toggleCompleted } from "./operations";

const handlePanding = (state) => {
	state.isLoading = true;
};

const handleRejected = (state, action) => {
	state.isLoading = false;
	state.error = action.payload;
};

const tasksSlice = createSlice({
	name: "tasks",
	initialState: {
		items: [],
		isLoading: false,
		error: null,
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchTasks.pending, handlePanding)
			.addCase(fetchTasks.fulfilled, (state, action) => {
				state.isLoading = false;
				state.error = null;
				state.items = action.payload;
			})
			.addCase(fetchTasks.rejected, handleRejected)
			.addCase(addTask.pending, handlePanding)
			.addCase(addTask.fulfilled, (state, action) => {
				state.isLoading = false;
				state.error = null;
				state.items.push(action.payload);
			})
			.addCase(addTask.rejected, handleRejected)
			.addCase(deleteTask.pending, handlePanding)
			.addCase(deleteTask.fulfilled, (state, action) => {
				state.isLoading = false;
				state.error = null;
				state.items = state.items.filter(
					(task) => task.id !== action.payload.id
				);
			})
			.addCase(deleteTask.rejected, handleRejected)
			.addCase(toggleCompleted.pending, handlePanding)
			.addCase(toggleCompleted.fulfilled, (state, action) => {
				state.isLoading = false;
				state.error = null;
				state.items = state.items.map((task) =>
					task.id === action.payload.id ? action.payload : task
				);
			})
			.addCase(toggleCompleted.rejected, handleRejected);
	},
});

export default tasksSlice.reducer;
