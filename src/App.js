import React, {useState, useEffect}from "react";
import { hot } from "react-hot-loader/root";
import PostList from "./PostList";
import RegisterForm from "./register";
import LoginForm from "./logIn";
import LogOutButton from "./logOut";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PostForm from "./postMaker";
import UserProfile from "./profile";




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


  return (
    <Router>
      <>
      <h1>Welcome, {name}</h1>
      <Route path={"/"}>
      <Route path="/login"><LoginForm /></Route>
      <Route path="/user"><UserProfile /></Route>
      {isLoggedIn ? <Route><LogOutButton /></Route> : null}
      <Route path="/register"><RegisterForm /></Route>
      <Route path="/new-post"><PostForm /></Route>
      <Route exact path="/"><PostList /></Route>
      </Route>
    </>
    </Router>
    
  );
};

export default hot(App);

