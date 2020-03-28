import React, { Component, useEffect, useState } from "react";
import Task from "./Task";
import { connect } from "react-redux";
import * as taskActions from "../task.actions";
import * as authActions from "../../auth/auth.actions";
import { tasksListSelector } from "../task.selectors";
import { usersListSelector, getUserSelector } from "../../auth/auth.selectors";

const TasksList = ({ getTaskList, tasks, tasksList, users, name }) => {
  useEffect(() => {
    getTaskList();
  }, []);

  
  window.addEventListener('storage', function() {
    console.log("work");
    
  });
  let test = localStorage.getItem(taskss)
  let userTasks = tasksList.filter(task => {
    return tasks.find(a => a == task.taskId);
  });

  return (
    <>
      <ul className="tasks-list">
        {userTasks &&
          userTasks.map(filterTask => (
            <Task
              key={filterTask.id}
              {...filterTask}
              users={users}
            />
          ))}
      </ul>
    </>
  );
};

const mapState = state => {
  return {
    tasksList: tasksListSelector(state),
    users: usersListSelector(state)
  };
};
const mapDispatch = {
  getTaskList: taskActions.getTaskList,
  getUsers: authActions.getUsersList,
  getUser: authActions.getUser
};

export default connect(mapState, mapDispatch)(TasksList);
