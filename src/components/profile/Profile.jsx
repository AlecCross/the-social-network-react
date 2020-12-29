import React from 'react';
import ProfileData from './profileData/ProfileData'
//import s from './Profile.module.css';
import Posts from './posts/Posts';

let Profile = (props) => {
    return (
        <div>
            <ProfileData />
            <Posts posts={props.posts} />
        </div>
    );
}

export default Profile