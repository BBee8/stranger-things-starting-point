import React, {useState, useEffect}from "react";
import { hot } from "react-hot-loader/root";
import PostList from "./PostList";
import RegisterForm from "./register";
import LoginForm from "./logIn";
import LogOutButton from "./logOut";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import PostForm from "./postMaker";

const App = (props) => {
  const { name } = props;
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  async function validToken() {
    const token = localStorage.getItem("token");
    if (!token) setIsLoggedIn(false);
    else {
      setIsLoggedIn(true)
    }
  }

useEffect(()=>{
  validToken();
},[]);

console.log("Is Logged In: ", isLoggedIn);

  return (
    <Router>
      <>
      <div id="navbar"
      style={{
        display:"flex",
        marginLeft: "100px",
        marginRight: "100px",
        justifyContent: "center",
        font: "center",
        color: "green",
        fontFamily: "'Josefin Sans', sans-serif;"
      }}>
        <button><Link to="./logIn">Login</Link></button>
        <button><Link to="/PostList">Post List</Link></button>
        <button><Link to="/postMaker">Create a Post</Link></button>
        <button><Link to="/logOut">Log Out</Link></button>
        </div>
      <h1 style={{
              display:"flex",
              justifyContent: "center",
              marginLeft: "100px",
              marginRight: "100px",
              background: "lavender",
              color: "green",
              border: "solid 5px lavender",
              fontFamily: "'Josefin Sans', sans-serif;"
            }}>Welcome to Stranger Things!</h1>
      <Route path={"/"}>
      <Route path="/login"><LoginForm /></Route>
      {isLoggedIn ? <Route><LogOutButton /></Route> : null}
      <Route path="/register"><RegisterForm /></Route>
      <Route path="/postMaker"><PostForm /></Route>
      <Route path="/"><PostList /></Route>
      </Route>
    </>
    </Router>
    
  );
};

export default hot(App);