import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";

function IndivisualBlog() {
    const postId = useParams().postId;
    const [post, updatePost] = useState();
    const [comments, updateComments] = useState();

    useEffect(() => {
        const fetchPost = async () => {    
            const res = await axios.get(
              `https://jsonplaceholder.typicode.com/posts/${postId}`,
            );  
        
            updatePost(res.data);
          }
    
          fetchPost();
    }, [postId]);

    useEffect(() => {
        const fetchComments = async () => {    
            const res = await axios.get(
              `https://jsonplaceholder.typicode.com/comments`,
            );  

            let postComments = res.data.filter((comment) =>  {                
                return parseInt(postId) === comment.postId;
            });

            console.log(postComments);
        
            updateComments(postComments);
          }
    
          fetchComments();
    }, [postId]);

    if(!post) {
        return null;
    }

    if(!comments || comments.length === 0) {
        return null;
    }

    console.log(comments);

    return (
        <div>
            <h1>Post</h1>
            <h3>{postId}. {post.title}</h3>
            <p>{post.body}</p>

            <div>
                <h2>Comments</h2>
                {comments && comments.map((comment) => {
                    console.log(comment)
                    return <div>
                        <h6>Name: {comment.name}</h6>
                        <p>Email: {comment.email}</p>
                        <p>Comment: {comment.body}</p>
                    </div>
                })}
            </div>
        </div>
    );
}

export default IndivisualBlog;