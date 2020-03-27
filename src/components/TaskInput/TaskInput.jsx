import React, { useState } from "react";
import { connect } from "react-redux";
import * as taskActions from '../task.actions'

const TaskInput = ({createTask}) => {
  const [taskValue, setTaskValue] = useState("");

  const handleCreateTask = () => {
    createTask(taskValue);
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
  createTask: taskActions.createTask
}
export default connect(null,mapDispatch)(TaskInput);
