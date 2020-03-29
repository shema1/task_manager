export const tasksListSelector = state => {
	return state.tasks.tasksList.slice().sort((a, b) => a.done - b.done)
}
