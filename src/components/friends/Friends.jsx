// import axios from 'axios';
import * as axios from 'axios';
import React from 'react';
import userPhoto from '..//..//assets/images/avatar.svg';
// import Friend from './friend/Friend';
// import s from './Friends.module.css';

const Friends = (props) => {

    // let usersElements = props.usersPage.users.map( f => 
    // <Friend key = {f.id} name = {f.name} avatar={f.avatar} 
    // followUser={f.followUser} unfollowUser={f.unfollowUser}/>);
    // return (
    //     <div>
    //         <div>Friends</div>
    //         <div>
    //             {usersElements}
    //         </div>
    //     </div>
    // )

    let getUsers = () => {
        if (props.users.length === 0) {
            axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            props.actions.setUsers(response.data.items)
            });
        }
    }

    return <div>
        <button onClick={getUsers}>LoadUsers</button>{
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={
                            u.uniqueUrlName === null
                                ? userPhoto
                                : u.uniqueUrlName
                        } alt={u.name} />
                    </div>
                    <div>
                        {u.isFollowed
                            ? <button onClick={() => { props.actions.unfollowUser(u.id) }}>UnFollow</button>
                            : <button onClick={() => { props.actions.followUser(u.id) }}>Follow</button>
                        }
                    </div>
                </span>
                <span>
                    <div>{u.name}</div>
                    <div></div>
                </span>
            </div>)
        }
    </div>
}

export default Friends
