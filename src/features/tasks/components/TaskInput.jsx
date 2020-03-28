import React, { useState } from "react";
import { connect } from "react-redux";
import * as taskActions from "../task.actions";
import * as userActions from "../../auth/auth.actions";
import PropTypes from 'prop-types';


const TaskInput = ({ createTask, id, name, createTaskUser, currentUser }) => {
  const [taskValue, setTaskValue] = useState("");

  const handleCreateTask = taskValue => {
    // if(taskValue ==="") return console.log("enter the name of the task")
    let taskId = Math.floor(Math.random() * 10000);
    createTask(taskValue, name, taskId);
    createTaskUser(id, currentUser, taskId);
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
      <button onClick={handleCreateTask} className="btn create-task__btn">
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
  id: PropTypes.string,
  name: PropTypes.string,
  createTaskUser: PropTypes.func,
  currentUser: PropTypes.object
};

export default connect(null, mapDispatch)(TaskInput);
