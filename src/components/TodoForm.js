import React, { useState, useEffect, useRef } from 'react'

function TodoForm(props) {
	const [input, setInput] = useState(props.edit ? props.edit.value : "");

	const inputRef = useRef(null);

	useEffect(() => {
		inputRef.current.focus();
	})

	function handleChange (e) {
		setInput(e.target.value);
	}

	function handleSubmit (e) {
		e.preventDefault();

		props.onSubmit({
			id: Math.floor(Math.random() * 10000),
			text: input
		})

		setInput("");
	};

	return (
		<form className='todo_form' onSubmit={handleSubmit}>
			{props.edit ? (
				<>
				<input
				type="text"
				placeholder="Update todo"
				value={input}
				name="text"
				className='todo_input edit'
				onChange={handleChange}
				ref={inputRef}
			/>
			<button className='todo_button edit'>Update todo</button>
			</>
			) : (
			<>
				<input
					type="text"
					placeholder="Add a todo"
					value={input}
					name="text"
					className='todo_input'
					onChange={handleChange}
					ref={inputRef}
				/>
				<button className='todo_button'>Add todo</button>
			</>
			)}
			
		</form>
	)
}

export default TodoForm