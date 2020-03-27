import React, { Component, useEffect, useState } from "react";
import "./tasksList.scss";
import Task from "../Task/Task";
import { connect } from "react-redux";
import * as taskActions from "../task.actions";
import * as authActions from "../auth/auth.actions";
import { tasksListSelector } from "../task.selectors";
import { usersListSelector, getUserSelector } from "../auth/auth.selectors";
import {fetchUser} from '../auth/gateway'

const TasksList = ({  getUsers, tasks, userTaskList }) => {
  const [user, setUser] = useState({});
  let qs = qs;
 console.log(userTaskList)
  return (
    <>
    {userTaskList.lenght ===0 ?"work":"list empty"}
      <ul className="tasks-list">
        {userTaskList.map(task => (
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
