import React from 'react';
import Friend from '../friend/Friend';
//import s from './FriendPreview.module.css';

const FriendsPreview = (props) => {
    let frPrCount = 3;
    let firstThreeFriends = props.friends.map(f => {
        if (f.id <= frPrCount) {
            return <Friend name={f.name} avatar={f.avatar} minified />
        }
    }
    )
    return (
        <div>
            {firstThreeFriends}
        </div>
    )
}

export default FriendsPreview
