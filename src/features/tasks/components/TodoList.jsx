import React, { useEffect } from "react";
import "./styles.scss";
import "../../../styles/breakpoints.scss";

import * as authActions from "../../auth/auth.actions";
import { usersListSelector, getUserSelector } from "../../auth/auth.selectors";
import { connect } from "react-redux";
import { useHistory, useLocation, Link } from "react-router-dom";
import qs from "qs";
import TaskInput from "./TaskInput";
import TasksList from "./TasksList";
const TodoList = ({ getUsers, users }) => {
  let location = useLocation();
  let query = qs.parse(location.search, { ignoreQueryPrefix: true });
  let currentUser = getUserSelector(users, query.userId);

  useEffect(() => {
    getUsers();
  }, []);

 
  return (
    <>
      {currentUser && (
        <div className="user-header">
          <span className="user-header__img">
            <i className="fas fa-user"></i>
          </span>
          <span className="user-header__name">{currentUser.name}</span>
          <Link to="/" className="logout">
            <i class="fas fa-sign-out-alt"></i>
          </Link>
        </div>
      )}
      {currentUser && (
        <div className="task-manager">
          <h1 className="task-manager__title">task manager</h1>
          <TaskInput {...currentUser} currentUser={currentUser} />
          <TasksList {...currentUser} users={users}/>
        </div>
      )}
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
