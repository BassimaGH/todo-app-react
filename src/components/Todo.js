import React, { useState } from 'react'
import TodoForm from './TodoForm'
import { AiOutlineCloseSquare } from 'react-icons/ai'
import { AiOutlineEdit } from 'react-icons/ai'

function Todo({todos, completeTodo, removeTodo, updateTodo}) {
	const [edit, setEdit] = useState({
		id: null,
		value: ""
	});

	function submitUpdate(value) {
		updateTodo(edit.id, value)

		setEdit({
			id: null,
			value: ""
		})
	}

	if (edit.id) {
		return <TodoForm edit={edit} onSubmit={submitUpdate} />
	}

	return todos.map((todo, index) => (
		<div
			className={todo.isComplete ? "todo_row complete" : "todo_row"}
			key={index}
		>
			<div
				key={todo.id}
				onClick={() => completeTodo(todo.id)}
			>
				{todo.text}
			</div>

			<div className='icons'>
				<AiOutlineCloseSquare 
					onClick={() => removeTodo(todo.id)}
					className='delete_icon'
				/>
				<AiOutlineEdit 
				onClick={() => setEdit({id: todo.id, value: todo.text})}
				className='edit_icon'
				/>
			</div>

		</div>
	))
}

export default Todo;