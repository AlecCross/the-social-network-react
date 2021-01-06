import React from 'react';
import PostContainer from './posts/PostContainer';
import ProfileData from './profileData/ProfileData'
//import s from './Profile.module.css';

let Profile = (props) => {
    return (
        <div>
            <ProfileData />
            <PostContainer store={props.store} />
        </div>
    );
}

export default Profile