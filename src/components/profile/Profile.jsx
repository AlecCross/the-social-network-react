import React from 'react';
import ProfileData from './profileData/ProfileData'
//import s from './Profile.module.css';
import Posts from './posts/Posts';

let newPostElement = React.createRef();

let Profile = (props) => {
    let addPost=()=>{
         let text = newPostElement.current.value;
         props.addPost(text);
         newPostElement.current.value='';
    }
    return (
        <div>
            <ProfileData />
            <div>
                <textarea name='Новый пост' ref={newPostElement}></textarea>
            </div>
            <div>
                <button onClick={addPost}>Добавить</button>
            </div>
            <Posts posts={props.posts} />
        </div>
    );
}

export default Profile