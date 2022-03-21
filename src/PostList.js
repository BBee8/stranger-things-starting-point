import React, { useState, useEffect } from 'react';
import { getPosts } from './api';
import DeleteButton from './Delete';
import MessageBox from './message';


const PostList = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const getAllPosts = async () => {
         
    
          const data = await getPosts();
          console.log(data.data.posts);
          setPosts(data.data.posts);
        };
        getAllPosts();
      }, []);

    return (
        <div>
            {posts.map(post =>
                <div key={post._id}
                style={{
                   display:"flex",
                  marginLeft: "100px",
                  marginRight: "100px",
                  marginTop: "25px",
                  justifyContent: "center",
                  background: "lavender",
                  flexDirection: "column",
                  border: "solid 2px green",
                  padding: "10px",
                  color: "green",
                  fontFamily: "'Josefin Sans', sans-serif;"
                  }}>
                    <h2>{post.title}</h2>
                    <p>{post.description}</p>
                    {post.isAuthor ? <DeleteButton postId={post._id} setPosts={setPosts}/> :<MessageBox postId={post._id} />}
                </div>
            )}
        </div>
    );
};

export default PostList;