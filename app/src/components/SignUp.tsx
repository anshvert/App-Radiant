import "../css/login.css";
import { useState } from "react";
import React from "react";
const config = require(`../config/${process.env.NODE_ENV}_params`);
function SignUp(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleNameChange = event => {
    setName(event.target.value);
  };
  const handleEmailChange = event => {
    setEmail(event.target.value);
  };
  const handlePasswordChange = event => {
    setPassword(event.target.value);
  };
  const handleSubmit = async event => {
    event.preventDefault();
    const response = await fetch(`${config.urls.baseUrl}users/add`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: name,
        email: email,
        password: password
      })
    });
    const data = await response.json();
    if (data.success) {
      props.handleLogin();
    } else {
      console.log("bad signup");
    }
  };
  return (
    <div className="login-box">
      <form autoComplete="off">
        <h2>SignUp</h2>
        <div className="user-box">
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={handleNameChange}
          />
          <label>Name</label>
        </div>
        <div className="user-box">
          <input
            type="text"
            id="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
          />
          <label>Email</label>
        </div>
        <div className="user-box">
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
          />
          <label>Password</label>
        </div>
        <a href="/#" onClick={handleSubmit}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          SignUp
        </a>
      </form>
    </div>
  );
}
export default SignUp;
