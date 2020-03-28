export const usersListSelector = state => {
	return state.users.usersList
}

export const getUserSelector = (users, id) => {
	return users.find(user => user.id === id)
}
