import { useSelector } from "react-redux";
import classNames from "classnames";
import Task from "../Task/Task";
import "./TaskList.scss";

const getVisibleTasks = (tasks, statusFilter) => {
	switch (statusFilter) {
		case "active":
			return tasks.filter((task) => !task.completed);
		case "completed":
			return tasks.filter((task) => task.completed);
		default:
			return tasks;
	}
};

const TaskList = () => {
	const tasks = useSelector((state) => state.tasks.items);
	const statusFilter = useSelector((state) => state.filters.status);

	const visibleTasks = getVisibleTasks(tasks, statusFilter);

	return (
		<ul className="TaskList">
			{visibleTasks.map((task) => (
				<li
					key={task.id}
					className={classNames("TaskList__item", {
						"TaskList__item--completed": task.completed,
					})}
				>
					<Task task={task} />
				</li>
			))}
		</ul>
	);
};

export default TaskList;
