import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
	name: "tasks",
	initialState: {
		items: [],
		isLoading: false,
		error: null,
	},
	reducers: {
		// Виконається в момент старту HTTP-запиту
		fetchInProgress(state) {
			state.isLoading = true;
		},
		// Виконається якщо HTTP-запит завершився успішно
		fetchSuccess(state, action) {
			state.isLoading = false;
			state.error = null;
			state.items = action.payload;
		},
		// Виконається якщо HTTP-запит завершився з помилкою
		fetchError(state, action) {
			state.isLoading = false;
			state.error = action.payload;
		},

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
export const {
	fetchInProgress,
	fetchSuccess,
	fetchError,
	addTask,
	deleteTask,
	toggleCompleted,
} = slice.actions;
export default slice.reducer;
