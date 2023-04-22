import '../css/login.css';
import {useState} from 'react';
const config = require(`../config/${process.env.NODE_ENV}_params`)
const appConstants = require('../constants/appConstants')

function Login(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch(`${config.urls.baseUrl}users/login`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        'email':email,
        'password':password
      })
    })
    const data = await response.json()
    if (data.success){
        const user = data.data[0]
        if (!Object.prototype.hasOwnProperty.call(user,'icon')){
          user.icon = appConstants.DEFAULT_USER_ICON
        }
        props.handleLogin(user);
    }
    else{
      console.log(data.data.message)
    }
  };
  return (
    <div className="login-box">
      <h2>Login</h2>
      <form autoComplete='off'>
        <div className="user-box">
          <input
          type="text"
          id="email"
          name="email"
          value={email}
          onChange={handleEmailChange}/>
          <label>Email</label>
        </div>
        <div className="user-box">
          <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={handlePasswordChange}/>
          <label>Password</label>
        </div>
          <a href="/#" onClick={handleSubmit}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Login
          </a>
      </form>
  </div>
  );
}
export default Login;
