import { useState, useEffect } from "react";
import { FaPlus } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

import Container from "./Container/Container";
import TaskForm from "./TaskForm/TaskForm";
import IconButton from "./IconButton/IconButton";
import Modal from "./Modal/Modal";
import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";
import MainContent from "./MainContent/MainContent";
import "./App.scss";

const App = () => {
	// const [todos, setTodos] = useState(() => {
	// 	const savedTodos = window.localStorage.getItem("saved-todos");

	// 	if (savedTodos !== null) {
	// 		return JSON.parse(savedTodos);
	// 	}
	// 	return [];
	// });

	// const [filter, setFilter] = useState("");

	// useEffect(() => {
	// 	window.localStorage.setItem("saved-todos", JSON.stringify(todos));
	// }, [todos]);

	// const toggleCompleted = (todoId) => {
	// 	setTodos((prevTodos) =>
	// 		prevTodos.map((todo) =>
	// 			todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
	// 		)
	// 	);
	// };

	const [showModal, setShowModal] = useState(false);
	const [showSidebar, setShowSidebar] = useState(false);

	const toggleModal = () => {
		setShowModal((showModal) => !showModal);
	};
	const toggleSidebar = () => {
		setShowSidebar((showSidebar) => !showSidebar);
	};

	return (
		<div>
			<Header toggleSidebar={toggleSidebar}>
				<Sidebar className={showSidebar ? "open" : ""}>
					<IconButton onClick={toggleModal} className="AddTaskButton">
						Add task
						<FaPlus size={20} />
					</IconButton>
					<Calendar className="CustomCalendar" />
				</Sidebar>
			</Header>

			{showModal && (
				<Modal onClose={toggleModal}>
					<IconButton onClick={toggleModal} className="CloseModalButton">
						<MdClose size={24} />
					</IconButton>
					<TaskForm onClose={toggleModal}></TaskForm>
				</Modal>
			)}

			<Container>
				<MainContent className={showSidebar ? "shifted" : ""} />
			</Container>
		</div>
	);
};

export default App;
