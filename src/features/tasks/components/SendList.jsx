import React from "react";
import { connect } from "react-redux";
import * as authActions from "../../auth/auth.actions";
import * as tasksActions from "../task.actions"

const SendList = ({users, taskId, sendTaskUser,updateList}) => {

    let userList = users.filter(user => !user.tasks.includes(taskId))
    console.log(userList)

    const handleSendTask =(id, user)=>{
      sendTaskUser(id, user,taskId )
      updateList()
    }
  return (
    <div className="popup-send">
      <ul className="user-list">
        {/* <li>1</li>
        <li>1</li>
        <li>1</li> 
        <li>1</li> 
        <li>1</li> 
        <li>1</li> */}
        {userList.map(user => (
          <li>{user.name} <i class="far fa-paper-plane" onClick={()=> handleSendTask(user.id, user)}></i></li>
        ))}
      </ul>
    </div>
  );
};

const mapDispatch = {
  sendTaskUser: authActions.createTaskUser,
  updateList: tasksActions.getTaskList
}

export default connect(null, mapDispatch) (SendList);
