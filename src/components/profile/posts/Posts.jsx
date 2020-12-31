//import s from './Posts.module.css';
import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/state';
import Post from '../post/Post';

const Posts = (props) => {
    let postsElements = props.posts.map(p => <Post text={p.text} avatar={p.avatar} id={p.id} />);

    let newPostElement = React.createRef();

    let addPost = () => {
        // props.addPost();
        props.dispatch(addPostActionCreator());
    }
    let onPostChange = () =>{
        let text = newPostElement.current.value;
        let action = updateNewPostTextActionCreator(text);
        props.dispatch(action);
    }
    return (
        <div>
            <div>
                <textarea onChange={onPostChange} ref={newPostElement} 
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