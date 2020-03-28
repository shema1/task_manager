import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import qs from 'qs'
import * as taskActions from '../task.actions'
import * as userActions from '../../auth/auth.actions'
import { useLocation } from 'react-router-dom'
const TaskInput = ({ createTask, id, name, createTaskUser, currentUser }) => {
	const [taskValue, setTaskValue] = useState('')

	const handleCreateTask = taskValue => {
		// if(taskValue ==="") return console.log("enter the name of the task")
		let taskId = Math.floor(Math.random() * 10000)
		createTask(taskValue, name, taskId)
		createTaskUser(id, currentUser, taskId)
		setTaskValue('')
	}

	return (
		<div className='create-task'>
			<input
				type='text'
				className='create-task__input'
				value={taskValue}
				onChange={event => setTaskValue(event.target.value)}
				required
				placeholder='task name'
			/>
			<button onClick={handleCreateTask} className='  btn create-task__btn'>
				Create
			</button>
		</div>
	)
}

const mapDispatch = {
	createTask: taskActions.createTask,
	createTaskUser: userActions.createTaskUser,
}
export default connect(null, mapDispatch)(TaskInput)
