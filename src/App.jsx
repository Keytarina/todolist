import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { FaPlus } from "react-icons/fa";
import { MdClose } from "react-icons/md";

import Container from "./components/Container/Container";
import TaskList from "./components/TaskList/TaskList";
import TaskForm from "./components/TaskForm/TaskForm";
import IconButton from "./components/IconButton/IconButton";
import Modal from "./components/Modal/Modal";
import StatusFilter from "./components/StatusFilter/StatusFilter";
import TaskCounter from "./components/TaskCounter/TaskCounter";
import Header from "./components/Header/Header";

const App = () => {
	// const [todos, setTodos] = useState(() => {
	// 	const savedTodos = window.localStorage.getItem("saved-todos");

	// 	if (savedTodos !== null) {
	// 		return JSON.parse(savedTodos);
	// 	}
	// 	return [];
	// });

	// const [filter, setFilter] = useState("");
	const [showModal, setShowModal] = useState(false);

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

	const toggleModal = () => {
		setShowModal((showModal) => !showModal);
	};

	return (
		<>
			<Header>
				<StatusFilter />

				<IconButton onClick={toggleModal} className="AddTaskButton">
					Add task
					<FaPlus size={20} />
				</IconButton>
			</Header>

			<Container>
				{showModal && (
					<Modal onClose={toggleModal}>
						<IconButton onClick={toggleModal} className="CloseModalButton">
							<MdClose size={24} />
						</IconButton>
						<TaskForm onClose={toggleModal}></TaskForm>
					</Modal>
				)}

				<TaskCounter />
				<TaskList />
			</Container>
		</>
	);
};

export default App;
