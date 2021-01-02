import React from 'react';
import Friend from './friend/Friend';
import s from './Friends.module.css';

const Friends = (props) => {

    let friendsElements = props.friends.map(f => <Friend name={f.name} avatar={f.avatar} /> );
    return (
        <div>
            <div>Friends</div>
            <div>
                {friendsElements}
            </div>
        </div>
    )
}

export default Friends
