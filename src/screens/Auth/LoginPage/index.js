import React from "react";
// import MicrosoftLogin from "react-microsoft-login";
import "./LoginPage.css";

const LoginPage = () => {
  return (
    <div className="loginContainer">
      <div className="loginContent">
        <div className="loginTitle">
          <h2> Welcome to</h2>
          <hr />
          <p>Quality Compliance Portal</p>
        </div>
        <div className="btn-submit">
          <button className="btn-proceed">Proceed</button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
