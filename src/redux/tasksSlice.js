import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
	name: "tasks",
	initialState: {
		items: [],
		isLoading: false,
		error: null,
	},
	reducers: {
		addTask: (state, action) => {
			state.items.push(action.payload);
		},
		deleteTask: (state, action) => {
			state.items = state.items.filter((item) => item.id !== action.payload);
		},
		toggleCompleted: (state, action) => {
			for (const task of state.items) {
				if (task.id === action.payload) {
					task.completed = !task.completed;
					break;
				}
			}
		},
	},
});
// Експортуємо фабрики екшенів і редюсер слайсу
export const { addTask, deleteTask, toggleCompleted } = slice.actions;
export default slice.reducer;
