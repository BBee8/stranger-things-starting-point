import React, { useState } from 'react';
import { registerUser } from './api';
import { useHistory } from 'react-router-dom';

const RegisterForm = () => {
        const[username, setUsername] = useState("");
        const[password, setPassword] = useState("");
        const[passwordConfirmation, setpasswordConfirmation] = useState("");

const history = useHistory();

        
  return (
    <div
    style={{
      display:"flex",
      marginTop: "50px",
      marginLeft: "200px",
      marginRight: "200px",
      padding: "10px",
      background: "lavender",
      border: "green",
      justifyContent: "center",
      font: "center",
      flexDirection: "column",
      color: "green",
      fontFamily: "'Josefin Sans', sans-serif;"
    }}
    >
      <label htmlFor="username">Username</label>
      <br></br>
      <input onChange={event => setUsername(event.target.value)}required />
      <br></br>
      <label htmlFor="password">Password</label>
      <br></br>
      <input onChange={event => setPassword(event.target.value)}required />
      <br></br>

      <label htmlFor="passwordConfirmation">Confirm Password</label>
      <br></br>
      <input onChange={event => setpasswordConfirmation(event.target.value)}required />
      <br></br>
      <button
        disabled={password === passwordConfirmation ? false : true}
        type="button" onClick= { event => {
                event.preventDefault();
                registerUser(username,password)
                setUsername("");
                setPassword("");
                setpasswordConfirmation("");
                history.push("/")
                }}> Register </button>
    </div>
  );
};

export default RegisterForm;