import React, { useState } from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo'

function TodoList() {
	const [todos, setTodos] = useState([]);

	function addTodo (todo) {
		if (!todo.text || /^\s*$/.test(todo.text)) {
			return;
		}

		const newTodos = [todo, ...todos];

		setTodos(newTodos);
	}

	function updateTodo(todoId, newValue) {
		if (!newValue.text || /^\s*$/.test(newValue.text)) {
			return;
		}

		setTodos(previousTodo => previousTodo.map(item => (item.id === todoId ? newValue : item)))
	}

	function removeTodo(id) {
		const removeArr = [...todos].filter(todo => todo.id !== id);

		setTodos(removeArr);
	}

	function completeTodo(id) {
		let updateTodos = todos.map(todo => {
			if (todo.id === id) {
				todo.isComplete = !todo.isComplete;
			}
			return todo;
		})
		setTodos(updateTodos);
	}

	return (
		<div>
			<h1>Whats the plan for today</h1>
			<TodoForm onSubmit={addTodo}/>
			<Todo 
				todos={todos}
				completeTodo={completeTodo}
				removeTodo={removeTodo}
				updateTodo={updateTodo}
			/>
		</div>
	)
}

export default TodoList;