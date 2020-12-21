import React from 'react';
import ProfileData from './profileData/ProfileData'
import s from './Profile.module.css';
import Posts from './posts/Posts';

let Profile = () => {
    return (
        <div>
            <ProfileData />
            <Posts />
        </div>

    );
}

export default Profile