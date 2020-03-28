import * as tasksGateway from './gateway'
import moment from 'moment'
export const TASKS_LIST_RECIEVED = 'TASKS_LIST_RECIEVED'

export const taskListRecieved = taskList => {
	return {
		type: TASKS_LIST_RECIEVED,
		payload: {
			taskList,
		},
	}
}

export const getTaskList = () => {
	return function(dispatch) {
		tasksGateway
			.fetchTasksList()
			.then(data => localStorage.setItem('tasks', JSON.stringify(data)))

		tasksGateway.fetchTasksList().then(data => dispatch(taskListRecieved(data)))
	}
}

export const createTask = (taskName, author, taskId) => {
	return function(dispatch) {
		const task = {
			taskName,
			date: moment().format('MMM D YYYY, hh:mm:ss'),
			done: false,
			author,
			taskId,
		}
		tasksGateway.createTask(task).then(() => dispatch(getTaskList()))
	}
}

export const updateTask = (taskId, taskName, done) => {
	return function(dispatch) {
		const task = tasksGateway.fetchTask(taskId)
		const newTask = {
			...task,
			taskName,
			done,
		}
		tasksGateway.updateTask(taskId, newTask).then(() => dispatch(getTaskList()))
	}
}

export const deleteTask = taskId => {
	return function(dispatch) {
		tasksGateway.deleteTask(taskId).then(() => dispatch(getTaskList()))
	}
}
