export const regValidator = (users, username, email) => {
	console.log(users)
	const checkUsername = users.find(
		user => user.name.toLowerCase() === username.toLowerCase()
	)

	if (checkUsername) {
		alert('The name already exists')
		return false
	}
	const checkEmail = users.find(
		user => user.email.toLowerCase() === email.toLowerCase()
	)

	if (checkEmail) {
		alert('The email already exists')
		return false
	}
	return true
}
