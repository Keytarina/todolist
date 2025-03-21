import { useDispatch } from "react-redux";
import { addTask } from "../../redux/operations";
import "./TaskForm.scss";

const TaskForm = ({ onClose }) => {
	const dispatch = useDispatch();

	const handleSubmit = (event) => {
		event.preventDefault();
		const form = event.target;

		const taskText = form.elements.text.value.trim();
		if (taskText === "") return; // Не додаємо пустий текст

		dispatch(addTask(event.target.elements.text.value));

		form.reset();
		onClose(); // Закриваємо модалку після сабміту
	};

	return (
		<form className="TaskForm" onSubmit={handleSubmit}>
			<textarea
				name="text"
				placeholder="Enter task text..."
				className="TaskForm__textarea"
			/>
			<button type="submit" className="TaskForm__button">
				Add task
			</button>
		</form>
	);
};

export default TaskForm;
