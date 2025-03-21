import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaPlus } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

import Container from "../Container/Container";
import TaskForm from "../TaskForm/TaskForm";
import IconButton from "../IconButton/IconButton";
import Modal from "../Modal/Modal";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import MainContent from "../MainContent/MainContent";
import Loading from "../Loading/Loading";
import NoFound from "../NoFound/NoFound";

import { fetchTasks } from "../../redux/operations";

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

			{isLoading && <Loading />}
			{error && <NoFound error={error} />}
			{!isLoading && !error && (
				<Container>
					<MainContent className={showSidebar ? "shifted" : ""} />
				</Container>
			)}
		</div>
	);
};

export default App;
