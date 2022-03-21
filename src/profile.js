import React, {useEffect, useState} from "react";
import {User} from "./api";
import DeleteButton from "./Delete";

const UserProfile = ()=> {

    const[posts, setPosts] = useState([])
    const[messages, setMessages] = useState([]); 

    useEffect(() => {
        const getUserProfile = async () => {
            const data = await User();
            console.log(data.data)
            setPosts(data.data)
            // setMessages(data.data.messages)
        };
            getUserProfile();
        },[]);
    

    return (
        <div>
            <h1>Profile</h1>
            {posts.map(post =>
                <div key={post._id}>
                    <h2>{post.title}</h2>
                    <p>{post.active}</p>
                    {post.isAuthor ? <DeleteButton postId={post._id} /> :null}
                </div>
            )}
            <br></br>
            {/* {messages.map(message => 
                <div key={message._id}>
                    <h2>{message.username}</h2>
                    <p>{message.content}</p>
                    </div>
                )} */}
        </div>
    );
}       


export default UserProfile;


{/* <div className="User"> */}
           {/* {posts.map(post =>  */}
            // <div key={post._id}>
                {/* <h2>{post.title}</h2> */}
                {/* <h3>{post.active}</h3> */}
            {/* )} */}
{/*  */}
{/*  */}
        {/* </div> */}