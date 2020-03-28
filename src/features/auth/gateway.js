const baseUrl =
	'https://5e39d9d88d7e1300149cd70c.mockapi.io/api/v1/task-manager'

export const fetchUserList = () => {
	return fetch(baseUrl).then(response => response.json())
}

export const fetchUser = id => {
	return fetch(`${baseUrl}/${id}`).then(response => response.json())
}

export const createUser = newUser =>
	fetch(baseUrl, {
		method: 'POST',
		headers: {
			'Content-type': 'application/json; charset=UTF-8',
		},
		body: JSON.stringify(newUser),
	})

export const deleteTask = id => {
	return fetch(`${baseUrl}/${id}`, {
		method: 'DELETE',
	})
}

export const updateUser = (id, newTask) =>
	fetch(`${baseUrl}/${id}`, {
		method: 'PUT',
		body: JSON.stringify(newTask),
		headers: {
			'Content-type': 'application/json; charset=UTF-8',
		},
	})
