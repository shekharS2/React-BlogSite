import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";

function IndivisualBlog() {
    const postId = useParams().postId;
    const [post, updatePost] = useState();
    const [comments, updateComments] = useState();

    useEffect(() => {
        const fetchComments = async () => {    
            const res = await axios.get(
              `https://jsonplaceholder.typicode.com/comments`,
            );  
        
            updatePost(res.data);
          }
    
          fetchComments();
    }, [postId]);

    useEffect(() => {
        const fetchPost = async () => {    
            const res = await axios.get(
              `https://jsonplaceholder.typicode.com/posts/${postId}`,
            );  
        
            updateComments(res.data);
          }
    
          fetchPost();
    }, [postId]);

    if(!post) {
        return null;
    }

    if(!comments || comments.length === 0) {
        return null;
    }

    return (
        <div>
            <h1>Post</h1>
            <h3>{postId}. {post.title}</h3>
            <p>{post.body}</p>

            <div>
                <h2>Comments</h2>
                {comments && comments.map((comment) => {
                    if(postId === comment.postId) {
                        return <div>
                            <h3>Name: {comment.name}</h3>
                            <h3>Name: {comment.email}</h3>
                            <h3>Name: {comment.body}</h3>
                        </div>
                    }else {
                        return null;
                    }
                })}
            </div>
        </div>
    );
}

export default IndivisualBlog;