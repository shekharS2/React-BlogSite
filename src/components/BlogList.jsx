import React from 'react';
// import axios from 'axios';
// import { useEffect, useState } from 'react';
import Blog from './Blog';
import { useNavigate } from 'react-router-dom';

function BlogList(props) {
    const navigate = useNavigate();
    
    const handleDivClick = (postId) => {
        navigate('/' + postId);
    };

    return (
        <div className='blog-list-container'>
            <h1>All Posts</h1>
            {props.posts && props.posts.length !== 0 && (<div>
                    {props.posts.map((post) => {
                        return <div className='blog-container' key={post.id} onClick={() => {handleDivClick(post.id)}}>
                            <Blog post={post} />
                        </div>
                    })}
                </div>)
            }
        </div>
    );
};

export default BlogList;