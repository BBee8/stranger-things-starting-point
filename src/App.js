import React, {useState, useEffect}from "react";
import { hot } from "react-hot-loader/root";
import PostList from "./PostList";
import RegisterForm from "./register";
import LoginForm from "./logIn";
import LogOutButton from "./logOut";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import PostForm from "./postMaker";
import UserProfile from "./profile";


const App = (props) => {
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

//const logOutFunction = () => {
  //localStorage.removeItem('token');

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
        <button><Link to="/">Post List</Link></button>
        <button><Link to="/postMaker">Create a Post</Link></button>
        <button onClick={async () => (
          await localStorage.removeItem('token')
          )}><Link to="/login">Log Out</Link></button>
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
      <Route exact path={"/"}><PostList /></Route>
      <Route path={"/postMaker"}><PostForm /></Route>
      <Route path="/login"><LoginForm /></Route>
      <Route path="/user"><UserProfile /></Route>
      {isLoggedIn ? <Route><LogOutButton /></Route> : null}
      <Route path="/register"><RegisterForm /></Route>

      
    </>
    </Router>
    
  );
};

export default hot(App);