import { useDispatch } from "react-redux";
import { MdClose } from "react-icons/md";
import { deleteTask, toggleCompleted } from "../../redux/actions";

const Task = ({ task }) => {
	const dispatch = useDispatch();

	const handleDelete = () => {
		dispatch(deleteTask(task.id));
	};

	const handleToogle = () => {
		dispatch(toggleCompleted(task.id));
	};

	return (
		<>
			<input
				type="checkbox"
				className="TaskList__checkbox"
				checked={task.completed}
				onChange={handleToogle}
			/>
			<p className="TaskList__text">{task.text}</p>
			<button type="button" className="TaskList__btn" onClick={handleDelete}>
				<MdClose size={24} />
			</button>
		</>
	);
};

export default Task;
