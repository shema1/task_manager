import React, { useEffect } from 'react'
import './styles.scss'
import '../../../styles/breakpoints.scss'
import * as authActions from '../../auth/auth.actions'
import { usersListSelector, getUserSelector } from '../../auth/auth.selectors'
import { connect } from 'react-redux'
import { useLocation, Link } from 'react-router-dom'
import qs from 'qs'
import TaskInput from './TaskInput'
import TasksList from './TasksList'
import PropTypes from 'prop-types'

const TodoList = ({ getUsers, users }) => {
	let location = useLocation()
	let query = qs.parse(location.search, { ignoreQueryPrefix: true })
	let currentUser = getUserSelector(users, query.userId)

	useEffect(() => {
		getUsers()
	}, [getUsers])

	return (
		<>
			{currentUser && (
				<div className='user-header'>
					<span className='user-header__user-img'>
						<i className='fas fa-user'></i>
					</span>
					<span className='user-header__name'>{currentUser.name}</span>
					<Link to='/' className='user-header__logout'>
						<i className='fas fa-sign-out-alt'></i>
					</Link>
				</div>
			)}
			{currentUser && (
				<div className='task-manager'>
					<h1 className='task-manager__title'>task manager</h1>
					<TaskInput {...currentUser} currentUser={currentUser} />
					<TasksList {...currentUser} users={users} />
				</div>
			)}
		</>
	)
}

const mapState = state => {
	return {
		users: usersListSelector(state),
	}
}
const mapDispatch = {
	getUsers: authActions.getUsersList,
	getUser: authActions.getUser,
}

TodoList.propTypes = {
	users: PropTypes.array,
	getUsers: PropTypes.func,
}

export default connect(mapState, mapDispatch)(TodoList)
