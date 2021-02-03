import React from 'react'
import PostContainer from './posts/PostContainer'
import ProfileInfo from './profileInfo/ProfileInfo'
//import s from './Profile.module.css'

let Profile = (props) => {
    return (
        <div>
            <ProfileInfo profile={props.profile}/>
            <PostContainer store={props.store} />
        </div>
    )
}

export default Profile