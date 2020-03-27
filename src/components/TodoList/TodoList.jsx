import React, { useEffect } from "react";
import "./todolist.scss";
import "../breakpoints.scss";
import TasksList from "../TaskList/TasksList";
import TaskInput from "../TaskInput/TaskInput";
import * as authActions from "../auth/auth.actions";
import { usersListSelector, getUserSelector } from "../auth/auth.selectors";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
const TodoList = ({ getUsers, users }) => {
  let history = useHistory();
  let currentUser = getUserSelector(users, "9");
  useEffect(() => {
    getUsers();
  }, []);

  // if (!currentUser){
  // 	return history.push();
  // }

  console.log(currentUser);
//   if(!currentUser) return null

  return (
    <>
      {currentUser && (
        <div className="user-header">
          <span className="user-header__name">{currentUser.name}</span>
          <span className="user-header__img">
            <i class="fas fa-user"></i>
          </span>
        </div>
      )}
      {currentUser &&(
        <div className="task-manager">
          <h1 className="task-manager__title">task manager</h1>
          <TaskInput />
		  <TasksList 
		  userTaskList={currentUser.tasks|| []} 
		  />
        </div>
      ) }
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
