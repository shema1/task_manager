import React, { Component, useEffect, useState } from "react";
import "./tasksList.scss";
import Task from "../Task/Task";
import { connect } from "react-redux";
import * as taskActions from "../task.actions";
import * as authActions from "../auth/auth.actions";
import { tasksListSelector } from "../task.selectors";
import { usersListSelector, getUserSelector } from "../auth/auth.selectors";
import {fetchUser} from '../auth/gateway'

const TasksList = ({ getTaskList, getUsers,getUser, tasks, users }) => {
  const [user, setUser] = useState({});
  let qs = qs;
  useEffect(() => {
    getUsers()

  }, []);
  

    let a = getUserSelector(users, '1')
    console.log(a)
  // }
  return (
    <>
  
      <ul className="tasks-list">
        {tasks.map(task => (
          <Task key={task.id} {...task} />
        ))}
      </ul>
    </>
  );
};

const mapState = state => {
  return {
    tasks: tasksListSelector(state),
    users: usersListSelector(state)
  };
};
const mapDispatch = {
  getTaskList: taskActions.getTaskList,
  getUsers: authActions.getUsersList,
  getUser: authActions.getUser
};

export default connect(mapState, mapDispatch)(TasksList);
