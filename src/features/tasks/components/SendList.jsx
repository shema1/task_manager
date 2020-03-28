import React from 'react'
import { connect } from 'react-redux'
import * as authActions from '../../auth/auth.actions'
import * as tasksActions from '../task.actions'

const SendList = ({ users, taskId, sendTaskUser, updateList, done }) => {
	let userList = users.filter(user => !user.tasks.includes(taskId))
	console.log(userList)

	const handleSendTask = (id, user) => {
		sendTaskUser(id, user, taskId)
		updateList()
	}
	return (
		<div className='send-tasks'>
			{done ? (
				<div className='send-tasks__measage'>
					"You can not send a completed task"
				</div>
			) : (
				<ul className='user-list'>
					{userList.map(user => (
						<li className='user-list__item'>
							{user.name}{' '}
							<i
								class='far fa-paper-plane'
								onClick={() => handleSendTask(user.id, user)}
							></i>
						</li>
					))}
				</ul>
			)}
		</div>
	)
}

const mapDispatch = {
	sendTaskUser: authActions.createTaskUser,
	updateList: tasksActions.getTaskList,
}

export default connect(null, mapDispatch)(SendList)
