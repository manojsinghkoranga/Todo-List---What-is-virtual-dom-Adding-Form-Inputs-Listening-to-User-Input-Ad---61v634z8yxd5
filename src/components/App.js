import React, { useState } from "react";
import "./../styles/App.css";
import Tasks from "./TasksList";


function App() {
	const [TodoList, setTodoList] = useState([]);
	const [todo, setTodo] = useState('');

	const handleAddTodo = (event) => {
		event.preventDefault();
		const obj = {task: todo}
		
		setTodoList([...TodoList, obj]);
		setTodo('');
	}

	const EditTask = (index, value) => {
		TodoList[index].task = value;
	}

	const HandleDelete = (task) => {
		const FilteredArray = TodoList.filter((obj) => {
			return obj.task != task;
		})
		setTodoList(FilteredArray);
	}

	return (
	<div id="main">
		<textarea id="task" value={todo} onChange={(event) => setTodo(event.target.value)} />
		<button id="btn" onClick={handleAddTodo}>Add</button>
		<ul>
			{TodoList.map(( ele , index) => {
				return <Tasks ele={ele} index={index} HandleDelete={HandleDelete} EditTask={EditTask}/>
			})}
		</ul>
	</div>
	);
}


export default App;
