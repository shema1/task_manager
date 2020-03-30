import * as usersGateway from './gateway'
export const USER_LIST_RECIEVED = 'USER_LIST_RECIEVED'

export const userListRecived = userList => {
	return {
		type: USER_LIST_RECIEVED,
		payload: {
			userList,
		},
	}
}

export const getUsersList = () => {
	return function (dispatch) {
		usersGateway
			.fetchUserList()
			.then(data => localStorage.setItem('users', JSON.stringify(data)))
		usersGateway.fetchUserList().then(data => dispatch(userListRecived(data)))
	}
}

export const getUser = id => {
	return function (dispatch) {
		usersGateway.fetchUser(id)
	}
}

export const createUser = (name, password, email) => {
	return function (dispatch) {
		const user = {
			name,
			email,
			password,
			tasks: [],
			gettingTasks: [],
		}
		usersGateway.createUser(user).then(() => dispatch(getUsersList()))
	}
}

export const createTaskUser = (id, userData, idTask) => {
	return function (dispatch) {
		const updateUser = {
			...userData,
			tasks: [...userData.tasks, idTask]
		}
		usersGateway.updateUser(id, updateUser).then(() => dispatch(getUsersList()))
	}
}

