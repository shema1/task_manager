import React, { useState } from "react";
import { connect } from "react-redux";
import * as taskActions from "../task.actions";
import * as userActions from "../../auth/auth.actions";
import PropTypes from "prop-types";

const TaskInput = ({ createTask, createTaskUser, currentUser }) => {
  const [taskValue, setTaskValue] = useState("");

  const handleCreateTask = () => {
    if (taskValue === "")
      return alert("field task name empty! enter the name of the task");
    let taskId = Math.floor(Math.random() * 10000);
    createTask(taskValue, currentUser.name, taskId);
    createTaskUser(currentUser.id, currentUser, taskId);
    setTaskValue("");
  };

  return (
    <div className="create-task">
      <input
        type="text"
        className="create-task__input"
        value={taskValue}
        onChange={event => setTaskValue(event.target.value)}
        required
        placeholder="task name"
      />
      <button onClick={handleCreateTask} className="  btn create-task__btn">
        Create
      </button>
    </div>
  );
};

const mapDispatch = {
  createTask: taskActions.createTask,
  createTaskUser: userActions.createTaskUser
};

TaskInput.propTypes = {
  createTask: PropTypes.func,
  createTaskUser: PropTypes.func,
  currentUser: PropTypes.object
};

export default connect(null, mapDispatch)(TaskInput);
