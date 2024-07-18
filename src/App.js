import React, { Component } from "react";
import shortid from "shortid";
import Container from "./components/Container";
import TodoList from "./components/TodoList";
import TodoEditor from "./components/TodoEditor";
import initialTodos from "./todos.json";
// import { format } from "date-fns";

// const now = format(new Date(), "dd.MM.yyyy");

class App extends Component {
	state = {
		todos: [],
	};

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

	render() {
		const { todos } = this.state;
		// const date = format(new Date(), "dd.MM.yyyy");
		const totalTodoCount = todos.length;
		const completedTodoCount = this.calculateCompletedTodos();
		return (
			<Container>
				<h1>Завдання</h1>
				<div>
					<p>Всього нотаток: {totalTodoCount}</p>
					<p>Виконано: {completedTodoCount}</p>
				</div>
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
