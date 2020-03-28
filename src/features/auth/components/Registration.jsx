import React, { useState, useEffect } from "react";
import "./auth.scss";
import { Link, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import * as authAction from "../auth.actions";
import { usersListSelector } from "../../auth/auth.selectors";
import { useForm } from "react-hook-form";
import { regValidator } from "./regValidator";

const Registration = ({ createUser, getUsers, users }) => {
  useEffect(() => {
    getUsers();
  }, []);

  const { register, handleSubmit } = useForm();
  let history = useHistory();
  const handleCreateUser = ({ name, password, email }) => {
    event.preventDefault();
    if (regValidator(users, name, email)) {
      createUser(name, password, email);
      history.push(`/`);
    }
  };

  return (
    <div class="login-page">
      <div class="form">
        <form
          class={`register-form `}
          onSubmit={handleSubmit(handleCreateUser)}
        >
          <input
            ref={register}
            name="name"
            type="text"
            placeholder="name"
            required
          />
          <input
            ref={register}
            name="password"
            type="password"
            placeholder="password"
            required
          />
          <input
            ref={register}
            name="email"
            type="email"
            placeholder="email address"
            required
          />
          <button>create</button>
          <p class="message">
            Already registered?
            <Link to="/">Sign In</Link>
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
  createUser: authAction.createUser,
  getUsers: authAction.getUsersList
};
export default connect(mapState, mapDispatch)(Registration);
