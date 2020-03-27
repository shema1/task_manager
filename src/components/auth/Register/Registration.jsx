import React, { useState } from "react";
import "../auth.scss";
import { Link, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import * as authAction from "../auth.actions";
import { createUser } from "../gateway";
import { useForm } from "react-hook-form";

const Registration = ({ crateUser }) => {
  const { register, handleSubmit } = useForm();
  const [id , setId] = useState("")
  let history = useHistory()
  const handleCreateUser = (data) => {
    event.preventDefault();
    
    createUser(data);
    history.push(`/user/4`)
  };

  return (
    <div class="login-page">
      <div class="form">
        <form
          class={`register-form `}
          onSubmit={handleSubmit(handleCreateUser)}
        >
          <input ref={register} name="name" type="text" placeholder="name" />
          <input
            ref={register}
            name="password"
            type="password"
            placeholder="password"
          />
          <input
            ref={register}
            name="email"
            type="text"
            placeholder="email address"
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

const mapDispatch = {
  crateUser: authAction.createUser
};
export default connect(null, mapDispatch)(Registration);
