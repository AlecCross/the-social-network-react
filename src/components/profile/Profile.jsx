import React from 'react'
import PostsContainer from './posts/PostsContainer'
import ProfileInfo from './profileInfo/ProfileInfo'
//import s from './Profile.module.css'

let Profile = (props) => {
    return (
        <div>
            <ProfileInfo profile={props.profile}/>
            <PostsContainer store={props.store} />
        </div>
    )
}

export default Profile