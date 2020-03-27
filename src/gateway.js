const baseUrl = 'https://5e39d9d88d7e1300149cd70c.mockapi.io/api/v1/cookbook'

export const fetchTasksList = () => {
	return fetch(baseUrl).then(response => response.json())
}

export const fetchTask = id => {
	return fetch(`${baseUrl}/${id}`).then(response => response.json())
}

export const createTask = newTask =>
	fetch(baseUrl, {
		method: 'POST',
		headers: {
			'Content-type': 'application/json; charset=UTF-8',
		},
		body: JSON.stringify(newTask),
	})

export const deleteTask = id => {
	return fetch(`${baseUrl}/${id}`, {
		method: 'DELETE',
	})
}

export const updateTask = (id, newTask) =>
	fetch(`${baseUrl}/${id}`, {
		method: 'PUT',
		body: JSON.stringify(newTask),
		headers: {
			'Content-type': 'application/json; charset=UTF-8',
		},
	})
