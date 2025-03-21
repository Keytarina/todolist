import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://6736093b5995834c8a9523d8.mockapi.io/";

export const fetchTasks = createAsyncThunk(
	"tasks/fetchAll",
	async (_, thunkAPI) => {
		try {
			const response = await axios.get("/tasks");
			console.log(response.data);
			return response.data;
		} catch (error) {
			return thunkAPI.rejectWithValue(error.message);
		}
	}
);

export const addTask = createAsyncThunk(
	"tasks/addTask",
	async (text, thunkAPI) => {
		try {
			const response = await axios.post("/tasks", { text });
			console.log(response.data);
			return response.data;
		} catch (error) {
			return thunkAPI.rejectWithValue(error.message);
		}
	}
);

export const deleteTask = createAsyncThunk(
	"tasks/deleteTask",
	async (taskId, thunkAPI) => {
		try {
			const response = await axios.delete(`/tasks/${taskId}`);
			return response.data;
		} catch (error) {
			return thunkAPI.rejectWithValue(error.message);
		}
	}
);

export const toggleCompleted = createAsyncThunk(
	"tasks/toggleTask",
	async (task, thunkAPI) => {
		try {
			const response = await axios.put(`/tasks/${task.id}`, {
				completed: !task.completed,
			});
			return response.data;
		} catch (error) {
			return thunkAPI.rejectWithValue(error.message);
		}
	}
);
