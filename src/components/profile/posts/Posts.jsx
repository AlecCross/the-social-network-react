//import s from './Posts.module.css';
import React from 'react';
import Post from '../post/Post';

const Posts = (props) => {
    let postsElements = props.profilePage.posts.map(p => <Post text={p.text}
        avatar={p.avatar} id={p.id} key={p.id}/>);
    let newPostText = props.profilePage.newPostText;
    let newPostElement = React.createRef();

    let onAddPost = () => {
        if (newPostText.length !== 0) {
            props.addPost();
        }
    }
    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }
    let addPostKeyDown = (event) => {
        if (event.target.value.length !== 0) {
            if (event.ctrlKey && event.keyCode === 13) {
                props.addPost();
            }
        }
    }

    return (
        <div>
            <div>
                <textarea onChange={onPostChange} ref={newPostElement}
                    onKeyDown={addPostKeyDown}
                    value={newPostText} />
            </div>
            <div>
                <button onClick={onAddPost}>Добавить</button>
            </div>
            {postsElements}
        </div>
    )
}

export default Posts