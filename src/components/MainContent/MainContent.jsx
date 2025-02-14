import TaskCounter from "../TaskCounter/TaskCounter";
import TaskList from "../TaskList/TaskList";
import "./MainContent.scss";

const MainContent = () => {
	return (
		<main className="MainContent">
			<TaskCounter />
			<TaskList />
		</main>
	);
};

export default MainContent;
