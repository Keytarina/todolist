import axios from "axios";
import { fetchInProgress, fetchSuccess, fetchError } from "./tasksSlice";

axios.defaults.baseURL = "https://6736093b5995834c8a9523d8.mockapi.io/";

export const fetchTasks = () => async (dispatch) => {
	try {
		dispatch(fetchInProgress());
		const response = await axios.get("/tasks");

		dispatch(fetchSuccess(response.data));
	} catch (error) {
		dispatch(fetchError(error.message));
	}
};
