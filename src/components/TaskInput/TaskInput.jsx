import React, { useState } from "react";
import { connect } from "react-redux";
import * as taskActions from '../task.actions'
import * as userActions from '../auth/auth.actions'

const TaskInput = ({createTask,createTaskUser}) => {
  const [taskValue, setTaskValue] = useState("");

  const handleCreateTask = () => {
    // createTask(taskValue);
    createTaskUser("10",taskValue)
    setTaskValue("")
  };
  return (
    <div className="create-task">
      <input
        type="text"
        className="create-task__input"
        value={taskValue}
        onChange={event => setTaskValue(event.target.value)}
      />
      <button onClick={handleCreateTask} className="btnn">
        Create
      </button>
    </div>
  );
};

const mapDispatch = {
  createTask: taskActions.createTask,
  createTaskUser: userActions.createTaskUser
}
export default connect(null,mapDispatch)(TaskInput);
