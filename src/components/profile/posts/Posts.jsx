//import s from './Posts.module.css';
import React from 'react';
import Post from '../post/Post';

let newPostElement = React.createRef();

const Posts = (props) => {
    let postsElements = props.posts.map(p => <Post text={p.text} avatar={p.avatar} id={p.id} />);

    let addPost = () => {
        // props.addPost();
        props.dispatch({type: 'ADD-POST'});
    }
    let onPostChange = () =>{
        // let text = newPostElement.current.value;
        let action = {type: 'UPDATE-NEW-POST-TEXT', newText: newPostElement.current.value};
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