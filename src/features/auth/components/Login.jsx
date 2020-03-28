import "./auth.scss";
import { connect } from "react-redux";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link, useHistory, useLocation } from "react-router-dom";
import { usersListSelector } from "../auth.selectors";
import * as authActions from "../auth.actions";

const Login = ({ users, getUsers }) => {
  const { register, handleSubmit } = useForm();
  const history = useHistory()
  const location = useLocation()

  useEffect(() => {
    getUsers();
  });

  const handleCheck = data => {
    event.preventDefault();
    let user = users.find(
      user => user.name === data.name && user.password === data.password
    );
    if(!user){
      return alert("dont work blya")
    }
    history.push(`/tasks-manager?userId=${user.id}`)
  };

  return (
    <div class="login-page">
      <div class="form">
        <form class={`login-form`} onSubmit={handleSubmit(handleCheck)}>
          <input ref={register} name="name" type="text" placeholder="username" />
          <input
            ref={register}
            name="password"
            type="password"
            placeholder="password"
          />
          <button>login</button>
          <p class="message">
            Not registered?
            <Link to="/registration">Create an account</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

const mapState = state => {
  return {
    users: usersListSelector(state)
  };
};

const mapDispatch = {
  getUsers: authActions.getUsersList
};
export default connect(mapState, mapDispatch)(Login);
