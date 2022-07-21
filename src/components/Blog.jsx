import React from 'react';

function Blog(props) {
    return (
        <div>
            <h3>{props.post.id}. {props.post.title}</h3>
            <p>{props.post.body}</p>
        </div>
    );
}

export default Blog;