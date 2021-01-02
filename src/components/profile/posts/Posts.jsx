//import s from './Posts.module.css';
import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/state';
import Post from '../post/Post';

const Posts = (props) => {
    let postsElements = props.posts.map(p => <Post text={p.text} avatar={p.avatar} id={p.id} />);

    let newPostElement = React.createRef();

    let addPost = (event) => {
        if(event.target.value !== 0){
            props.dispatch(addPostActionCreator());
        }
    }
    let onPostChange = () =>{
        let text = newPostElement.current.value;
        let action = updateNewPostTextActionCreator(text);
        props.dispatch(action);
    }
    let addPostKeyDown = (event) =>{
        if(event.target.value !== 0){
            if(event.ctrlKey && event.keyCode === 13)
        {
            props.dispatch(addPostActionCreator());
        }
        }
    }
    return (
        <div>
            <div>
                <textarea onChange={onPostChange} ref={newPostElement} 
                onKeyDown={addPostKeyDown}
                value={props.newPostText}/>
            </div>
            <div>
                <button onClick={addPost}>Добавить</button>
            </div>
            {postsElements}
        </div>
    )
}

export default Posts