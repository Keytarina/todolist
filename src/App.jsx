import { useState, useEffect } from "react";
import { FaPlus } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

import Container from "./components/Container/Container";
import TaskForm from "./components/TaskForm/TaskForm";
import IconButton from "./components/IconButton/IconButton";
import Modal from "./components/Modal/Modal";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import MainContent from "./components/MainContent/MainContent";
import "./styles/App.scss";

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

	const toggleModal = () => {
		setShowModal((showModal) => !showModal);
	};

	return (
		<>
			<Header />

			{showModal && (
				<Modal onClose={toggleModal}>
					<IconButton onClick={toggleModal} className="CloseModalButton">
						<MdClose size={24} />
					</IconButton>
					<TaskForm onClose={toggleModal}></TaskForm>
				</Modal>
			)}

			<Container>
				<Sidebar>
					<IconButton onClick={toggleModal} className="AddTaskButton">
						Add task
						<FaPlus size={20} />
					</IconButton>
					<Calendar className="CustomCalendar" />
				</Sidebar>

				<MainContent />
			</Container>
		</>
	);
};

export default App;
