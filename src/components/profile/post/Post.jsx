import React from 'react';
import s from './Post.module.css'

let Post = (props) => {
    return (
        <div className={s.post}>
              <img className={s.avatar}
               src={props.avatar} 
               alt="avatarPost"/>
              <blockquote>{props.text}</blockquote>
        </div>
    );
}

export default Post