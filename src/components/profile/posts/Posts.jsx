//import s from './Posts.module.css';
import React from 'react';
import Post from '../post/Post';

let newPostElement = React.createRef();

const Posts = (props) => {
    let postsElements = props.posts.map(p => <Post text={p.text} avatar={p.avatar} id={p.id} />);

    let addPost = () => {
        let text = newPostElement.current.value;
        props.addPost(text);
        props.updateNewPostText('');
    }
    let onPostChange = () =>{
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
        
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