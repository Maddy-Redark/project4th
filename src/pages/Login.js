import React from "react";

import Input from "../components/Input";
import Button from "../components/Button";
import "../css/Login.css";
import logo from "../images/mutofone.svg";

const Login = () => {
  return (
    <div className="login-body">
      <div className="bg-gradient">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="inputs">
          <Input type="email" text="Email" inputStyle="inputField" name="email" />
          <Input type="password" text="Password" inputStyle="inputField" name="password" />
          <div className="button-right">
            <Button
              buttonStyle="noOutlinePlain"
              buttonText="Forgot password?"
            />
          </div>
        </div>
        <div className="buttons">
          <Button buttonStyle="buttonSmall" buttonText="Log in" />
          <p>Or</p>
          <Button buttonStyle="button1" buttonText="Log in with Google" />
          <Button buttonStyle="button2" buttonText="Log in with Facebook" />
        </div>

        <p>Don't have an account?</p>
        <Button buttonStyle="noOutline" buttonText="Create an account" />
      </div>
    </div>
  );
};

export default Login;
