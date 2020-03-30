import React, { useState } from "react";
import "./popup.scss";
import { connect } from "react-redux";
import * as taskActions from "../tasks/task.actions";
import PropTypes from "prop-types";

const PopUp = ({ closePopUp, id, taskName, updateTask }) => {
  const [inputValue, setInputValue] = useState(taskName);

  const handleUpdateTask = () => {
    event.preventDefault();
    updateTask(id, inputValue);
    closePopUp(false);
    setInputValue("");
  };

  return (
    <div className="popup">
      <form action="popup-form" className="popup-form">
        <button className="close btn" onClick={() => closePopUp(false)}>
          <i className="fas fa-times"></i>
        </button>
        <label htmlFor="name" className="input-label">
          Name
        </label>
        <input
          type="text"
          value={inputValue}
          name="name"
          onChange={event => setInputValue(event.target.value)}
          className="input-name popup-input"
          required
        />
        <button
          className="add-task btn-popup"
          type="submit"
          onClick={handleUpdateTask}
        >
          Update
        </button>
      </form>
    </div>
  );
};

const mapDispatch = {
  updateTask: taskActions.updateTask
};

PopUp.propTypes = {
  closePopUp: PropTypes.func,
  id: PropTypes.string,
  taskName: PropTypes.string,
  updateTask: PropTypes.func
};

export default connect(null, mapDispatch)(PopUp);
