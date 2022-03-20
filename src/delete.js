import React, { useState, useEffect } from 'react';
import { deletePost } from './api';
import { getPosts } from './api';

const DeleteButton = (props)=>{

    const {postId,setPosts} = props;

    const handleClick = async()=>{
        await deletePost(postId)
        const data = await getPosts();
        setPosts(data.data.posts);

    }
    return(
        <div>
            <button onClick={handleClick}>Delete Post</button>
        </div>
    )

}

export default DeleteButton;