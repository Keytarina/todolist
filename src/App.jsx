import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
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

import { fetchTasks } from "./redux/operations";

import "./App.scss";

const App = () => {
	const [showModal, setShowModal] = useState(false);
	const [showSidebar, setShowSidebar] = useState(false);

	const dispatch = useDispatch();

	const { isLoading, error } = useSelector((state) => state.tasks);

	useEffect(() => {
		dispatch(fetchTasks());
	}, [dispatch]);

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
				{isLoading && <p>Loading tasks...</p>}
				{error && <p>{error}</p>}
				<MainContent className={showSidebar ? "shifted" : ""} />
			</Container>
		</div>
	);
};

export default App;
