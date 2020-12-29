//import s from './Posts.module.css';
import React from 'react';
import Post from '../post/Post';

const Posts = (props) =>{
    let postsElements = props.posts.map( p => <Post text={p.text} avatar={p.avatar} id={p.id} />);
    return(
        <div>
            {postsElements}
        </div>
    )
}

export default Posts