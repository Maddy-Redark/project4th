import React from "react";
import Input from "../components/Input";

import "../css/SignUp.css";
import Logo from "../images/mutofone.svg";
import Button from "../components/Button";

const SignUp = () => {
  return (
    <div className="signup-bg">
      <div className="signup-body">
        <div className="signup-form">
          <div className="username">
            <div className="field-unit">
              <p>First Name</p>
              <Input type="text" text="" inputStyle="inputSmall" name="email" />
            </div>
            <div className="field-unit">
              <p>Last Name</p>
              <Input type="text" text="" inputStyle="inputSmall" name="email" />
            </div>
          </div>
          <div className="field-unit">
            <p>Email</p>
            <Input
              type="email"
              text=""
              inputStyle="outline-input"
              name="email"
            />
          </div>
          <div className="field-unit">
            <p>Password</p>
            <Input
              type="password"
              text=""
              inputStyle="outline-input"
              name="password"
            />
          </div>
          <div className="field-unit">
            <p>Confirm password</p>
            <Input
              type="password"
              text=""
              inputStyle="outline-input"
              name="cpassword"
            />
          </div>
          <div className="field-unit">
            <p>Place</p>
            <Input
              type="text"
              text=""
              inputStyle="outline-input"
              name="place"
            />
          </div>

          <div className="field-unit-horizontal">
            <span>Sign in instead</span>
            <Button buttonStyle="buttonSmall2" buttonText="Log in" />
          </div>
          <div className="buttons">
            <Button buttonStyle="button3" buttonText="Log in with Google" />
            <Button buttonStyle="button2" buttonText="Log in with Facebook" />
          </div>
        </div>
        <div className="app-logo">
          <img src={Logo} alt="app logo" />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
