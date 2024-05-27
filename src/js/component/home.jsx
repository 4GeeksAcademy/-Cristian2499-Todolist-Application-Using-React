import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [task, setTask] = useState ("");
	const [tasks, setTasks] = useState ([]);
	
	function addTask (e) {
		//setTasks([...tasks, task])
		if (e.key === "Enter") {
			setTasks([...tasks, task])
		}
	};

	function removeTask (itemToRemove) {
		setTasks(tasks.filter((item) => item != itemToRemove))
	};

	return (
		<div className="container">
			<h1 className="text-center mt-5">Todolist</h1>
			<div className="card">
				<div className="input-group">
					<input onChange={(e) => setTask(e.target.value)} onKeyDown={(e) => addTask(e)} type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder="What needs to be done"/>
				</div>
				<div className="ms-3">
					{tasks.map((item, index) => {
						return (
							<div className="d-flex justify-content-between" key={item + index}>
								<li>{item}</li>
								<button className="btn me-3" onClick={() => removeTask(item)} >
									<i className="fas fa-window-close text-danger"></i>
								</button>
							</div>
						)
						
					})}
				</div>
				<div className="card-footer">
					{tasks.length} tasks
				</div>
			</div>
		</div>
	);
};

export default Home;
