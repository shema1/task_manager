import React, { useState } from 'react'
import { connect } from 'react-redux'
import * as taskActions from '../task.actions'
import Popup from '../../popup/Popup'
import SendList from './SendList'
import PropTypes from 'prop-types';
const Task = ({
	taskName,
	date,
	done,
	id,
	taskId,
	deleteTask,
	updateTask,
	users,
	author,
}) => {
	const [popUp, setPopup] = useState(false)
	const [sendList, setSendList] = useState(false)
	const handleDeleteTask = () => {
		deleteTask(id)
	}

	const changeTaskStatus = () => {
		updateTask(id, taskName, !done)
	}
	return (
		<>
			<li className={`tasks-list__task ${done ? 'task-done ' : ' '} `}>
				<div className='task'>
					<div className='task-status'>
						<input
							className='task-status__checkbox'
							type='checkbox'
							checked={done}
							onChange={changeTaskStatus}
						/>
					</div>
					<div className='task-info'>
						<span className='task-name '>{taskName}</span>
						<span className='task-info__author-name '>{author}</span>
						<span className='task-info__date'>{date}</span>
					</div>
					<div className='task-control'>
						<button className='btn' onClick={() => setSendList(!sendList)}>
							<i class='far fa-paper-plane'></i>
						</button>
						<button
							className='task-update btn'
							onClick={() => setPopup(!popUp)}
						>
							<i className='far fa-edit'></i>
						</button>
						<button className='task-delete btn'>
							<i className='far fa-trash-alt' onClick={handleDeleteTask}></i>
						</button>
					</div>
				</div>
				{sendList && <SendList users={users} taskId={taskId} done={done} />}
			</li>
			{popUp && (
				<Popup
					closePopUp={setPopup}
					taskName={taskName}
					id={id}
					popUp={popUp}
				/>
			)}
		</>
	)
}

const mapDispatch = {
	deleteTask: taskActions.deleteTask,
	updateTask: taskActions.updateTask,
}

Task.propTypes = {
	taskName:PropTypes.string,
	date:PropTypes.string,
	done:PropTypes.bool,
	id:PropTypes.string,
	taskId:PropTypes.number,
	deleteTask:PropTypes.func,
	updateTask:PropTypes.func,
	users:PropTypes.array,
	author: PropTypes.string,
}

export default connect(null, mapDispatch)(Task)
