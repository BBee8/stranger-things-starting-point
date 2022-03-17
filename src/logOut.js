import React from 'react';

const logOut = () => {
    localStorage.removeItem('token');
}

return (
    <div>
        <button onClick={logOut}>Log Out</button>
        </div>
    )
}
export default LogOutButton;