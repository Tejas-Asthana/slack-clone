import React, { useState } from "react";
import "./login.css";
import { Button } from "@material-ui/core";
import { signInThunk } from "../actions/signInAction.js";
import { store } from "../store/store.js";

function Login() {
  return (
    <div className="login">
      <div className="login-container">
        <img
          src="https://a.slack-edge.com/bv1-9/slack_logo-ebd02d1.svg"
          alt="slack logo"
        />
        <h1>Log in to Slack clone</h1>
        <Button onClick={() => store.dispatch(signInThunk())}>
          Login with Google
        </Button>
      </div>
    </div>
  );
}

export default Login;
