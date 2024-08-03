import React, { Component } from "react";
import shortid from "shortid";
import Container from "./components/Container";
import TodoList from "./components/TodoList";
import TodoEditor from "./components/TodoEditor";
import initialTodos from "./todos.json";
import IconButton from "./components/IconButton";
import Modal from "./components/Modal";
// import "";
// import { format } from "date-fns";

// const now = format(new Date(), "dd.MM.yyyy");

class App extends Component {
	state = {
		todos: initialTodos,
		filter: "",
		showModal: false,
	};

	componentDidMount() {
		const todos = localStorage.getItem("todos");
		const parsedTodos = JSON.parse(todos);

		if (parsedTodos) {
			this.setState({ todos: parsedTodos });
		}
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevState.todos !== this.state.todos) {
			localStorage.setItem("todos", JSON.stringify(this.state.todos));
		}
	}

	addTodo = (text) => {
		const todo = {
			id: shortid.generate(),
			text,
			completed: false,
		};

		this.setState(({ todos }) => ({
			todos: [todo, ...todos],
		}));
	};

	deleteTodo = (todoId) => {
		this.setState((prevState) => ({
			todos: prevState.todos.filter((todo) => todo.id !== todoId),
		}));
	};

	toggleCompleted = (todoId) => {
		this.setState(({ todos }) => ({
			todos: todos.map((todo) =>
				todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
			),
		}));
	};

	calculateCompletedTodos = () => {
		const { todos } = this.state;

		return todos.reduce(
			(total, todo) => (todo.completed ? total + 1 : total),
			0
		);
	};

	toggleModal = () => {
		this.setState(({ showModal }) => ({ showModal: !showModal }));
	};

	render() {
		const { todos, filter, showModal } = this.state;
		// const date = format(new Date(), "dd.MM.yyyy");
		const totalTodoCount = todos.length;
		const completedTodoCount = this.calculateCompletedTodos();
		return (
			<Container>
				<button type="button" onClick={this.toggleModal}>
					Відкрити модалку
				</button>
				{/* <IconButton onClick={this.toggleModal}>hello</IconButton> */}
				{showModal && (
					<Modal onClose={this.toggleModal}>
						<h1>Hello</h1>
						<p>
							Veniam in ex aliquip sit proident aliqua minim ea fugiat proident
							officia est velit. Incididunt nisi commodo duis cupidatat
							voluptate exercitation consequat officia fugiat. Sint esse
							occaecat dolor velit consectetur commodo pariatur incididunt est.
							Sit nulla cillum adipisicing cupidatat excepteur aliqua ullamco
							aliqua nostrud.
						</p>
						<button type="button" onClick={this.toggleModal}>
							Закрити модалку
						</button>
					</Modal>
				)}

				<h1>Завдання</h1>
				<div>
					<p>Всього нотаток: {totalTodoCount}</p>
					<p>Виконано: {completedTodoCount}</p>
				</div>

				{/* <IconButton>hello</IconButton> */}

				<TodoEditor onSubmit={this.addTodo}></TodoEditor>

				<TodoList
					todos={todos}
					onDeleteTodo={this.deleteTodo}
					onToggleCompleted={this.toggleCompleted}
				/>
			</Container>
		);
	}
}

export default App;
