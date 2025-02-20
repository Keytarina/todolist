import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
	name: "tasks",
	initialState: {
		items: [
			{ id: 0, text: "Learn HTML and CSS", completed: true },
			{ id: 1, text: "Get good at JavaScript", completed: true },
			{ id: 2, text: "Master React", completed: false },
			{ id: 3, text: "Discover Redux", completed: false },
			{ id: 4, text: "Build amazing apps", completed: false },
		],
	},
	reducers: {
		addTask: (state, action) => {
			return {
				...state,
				items: [...state.items, action.payload],
			};
			// state.items.push(action.payload);
		},
		deleteTask: (state, action) => {
			return {
				...state,
				items: state.items.filter((task) => task.id !== action.payload),
			};
			// state.items = state.items.filter((item) => item.id !== action.payload);
		},
		toggleCompleted: (state, action) => {
			return {
				...state,
				items: state.items.map((task) => {
					if (task.id !== action.payload) {
						return task;
					}
					return {
						...task,
						completed: !task.completed,
					};
				}),
			};
		},
	},
});
// Експортуємо фабрики екшенів і редюсер слайсу
export const { addTask, deleteTask, toggleCompleted } = slice.actions;
export default slice.reducer;
