import React from "react";
import { useHistory } from "react-router-dom";

const LogOutButton =() => {
    const history = useHistory();
    
    const logOut = () => {
        // event.PreventDefault();
        localStorage.removeItem('token');
        history.push("/login");
        

    }

    return (
        <div>
            <button onClick={logOut}>Log Out</button>
        </div>
    )


}

export default LogOutButton;