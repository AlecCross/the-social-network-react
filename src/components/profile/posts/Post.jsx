import React from 'react';
import s from './Post.module.css'

let Post = (props) => {
    return (
        <div>
           <div>
            {props.text}
           </div>
        </div>
    );
}

export default Post