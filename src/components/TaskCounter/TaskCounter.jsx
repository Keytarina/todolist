import { useSelector } from "react-redux";
import "./TaskCounter.scss";

const TaskCounter = () => {
	const tasks = useSelector((state) => state.tasks.items);

	const count = tasks.reduce(
		(acc, task) => {
			if (task.completed) {
				acc.completed += 1;
			} else {
				acc.active += 1;
			}
			return acc;
		},
		{ active: 0, completed: 0 }
	);

	return (
		<div className="TaskCounter">
			<p className="TaskCounter__item TaskCounter__active">
				Active: {count.active}
			</p>
			<p className="TaskCounter__item TaskCounter__completed">
				Completed: {count.completed}
			</p>
		</div>
	);
};

export default TaskCounter;
