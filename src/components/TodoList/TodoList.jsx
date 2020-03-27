import React, { useEffect } from "react";
import "./todolist.scss";
import "../breakpoints.scss";
import TasksList from "../TaskList/TasksList";
import TaskInput from "../TaskInput/TaskInput";
import * as authActions from "../auth/auth.actions";
import { usersListSelector, getUserSelector } from "../auth/auth.selectors";
import { connect } from "react-redux";
const TodoList = ({ getUsers, users }) => {
  useEffect(() => {
    getUsers();
}, []);
let currentUser = getUserSelector(users, "1");

//   if (currentUser) return;
	
  
  return (
    <>
      <div className="user-header">
        <span className="user-header__name">{}</span>
        <span className="user-header__img">
          <i class="fas fa-user"></i>
        </span>
      </div>
      <div className="task-manager">
        <h1 className="task-manager__title">task manager</h1>
        <TaskInput />
        <TasksList />
      </div>
    </>
  );
};

const mapState = state => {
  return {
    users: usersListSelector(state)
  };
};
const mapDispatch = {
  // getTaskList: taskActions.getTaskList,
  getUsers: authActions.getUsersList,
  getUser: authActions.getUser
};

export default connect(mapState, mapDispatch)(TodoList);
