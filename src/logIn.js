import React, { useState } from 'react';
import { loginUser } from "./api";
import { useHistory } from 'react-router-dom';

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  
  
  const handleLogin = (event) => {
    event.preventDefault();
    loginUser(username, password);
    history.push("/")
  };

  const handleRegister = ()=>{
    history.push("/register");
  }


  return (
    <div className="login-box">
      <label htmlFor="username">Username</label>
      <br></br>
      <input onChange={(event) => setUsername(event.target.value)} required />
      <br></br>
      <label htmlFor="password">Password</label>
      <br></br>
      <input onChange={(event) => setPassword(event.target.value)} required />
      <br></br>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleRegister}>Register</button>
    </div>
  );
};

export default LoginForm;
