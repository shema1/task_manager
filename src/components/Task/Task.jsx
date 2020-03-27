import React, { useState } from "react";
import PopUp from "../popup/Popup";
import { connect } from "react-redux";
import * as taskActions from "../task.actions";


const Task = ({ taskName, date, done, id ,deleteTask,updateTask}) => {
  const [popUp, setPopup] = useState(false);

  const handleDeleteTask = ()=>{
	  deleteTask(id)
  }

  const changeTaskStatus = () =>{
	updateTask(id,taskName,!done)
  }
  return (
    <>
      <li className={`tasks-list__task `}>
        <div className="task-header">
          <div>
            <input type="checkbox" checked={done} onChange={changeTaskStatus} />
          </div>
          <div className="task-info">
            <span className="task-name">{taskName}</span>
            <span className="task-date">{date}</span>
          </div>
          <div className="task-control">
            <button
              className="task-update btn"
              onClick={() => setPopup(!popUp)}
            >
              <i className="far fa-edit"></i>
            </button>
            <button className="task-delete btn">
              <i
                className="far fa-trash-alt"
                onClick={handleDeleteTask}
              ></i>
            </button>
          </div>
        </div>
      </li>
      {popUp && <PopUp closePopUp={setPopup} taskName={taskName} id={id} />}
    </>
  );
};

const mapDispatch ={
	deleteTask: taskActions.deleteTask,
	updateTask: taskActions.updateTask
}

export default connect(null,mapDispatch) (Task);
