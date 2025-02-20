import TaskCounter from "../TaskCounter/TaskCounter";
import TaskList from "../TaskList/TaskList";
import "./MainContent.scss";

const MainContent = ({ className }) => {
	return (
		<main className={`MainContent ${className}`}>
			<TaskCounter />
			<TaskList />
		</main>
	);
};

export default MainContent;
