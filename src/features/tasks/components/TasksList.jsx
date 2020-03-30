import React, { useEffect } from "react";
import Task from "./Task";
import { connect } from "react-redux";
import * as taskActions from "../task.actions";
import * as authActions from "../../auth/auth.actions";
import { tasksListSelector } from "../task.selectors";
import { usersListSelector } from "../../auth/auth.selectors";
import PropTypes from "prop-types";

const TasksList = ({ getTaskList, tasksList, users, currentUser }) => {
  useEffect(() => {
    getTaskList();
  }, [getTaskList]);

  let userTasks = tasksList.filter(task => {
    return currentUser.tasks.find(idUserTask => idUserTask === task.taskId);
  });

  window.addEventListener("storage", function() {
    location.reload();
  });

  return (
    <>
      <div className="tasks-header">
        <span className="tasks-header__status">Status</span>
        <span className="tasks-header__name"> Name</span>
        <span className="tasks-header__author">Author</span>
        <span className="tasks-header__date">Date</span>
        <span className="tasks-header__options">Options</span>
      </div>

      <ul className="tasks-list">
        {userTasks &&
          userTasks.map(filterTask => (
            <Task
              key={filterTask.id}
              {...filterTask}
              users={users}
              currentUser={currentUser}
            />
          ))}
        <div className="tasks-list__message">
          {userTasks.length === 0 ? "List empty add task" : " "}
        </div>
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

TasksList.propTypes = {
  getTaskList: PropTypes.func,
  tasksList: PropTypes.array,
  users: PropTypes.array
};

export default connect(mapState, mapDispatch)(TasksList);
