import React, {useState, useEffect}from "react";
import { hot } from "react-hot-loader/root";
import PostList from "./PostList";
import RegisterForm from "./register";
import LoginForm from "./logIn";
import LogOutButton from "./logOut";
import { BrowserRouter as Router, Route } from "react-router-dom";
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
      <h1>Welcome, {name}</h1>
      <Route path={"/"}>
      <Route path="/login"><LoginForm /></Route>
      {isLoggedIn ? <Route><LogOutButton /></Route> : null}
      <Route path="/register"><RegisterForm /></Route>
      <Route path="/new-post"><PostForm /></Route>
      <Route path="/"><PostList /></Route>
      </Route>
    </>
    </Router>
    
  );
};

export default hot(App);

