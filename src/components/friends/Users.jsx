import * as axios from 'axios';
import React from 'react';
import userPhoto from '..//..//assets/images/avatar.svg';

class Users extends React.Component {
    constructor(props) {
        super(props);
alert("создался объект пользователей");
        axios.get(`https://social-network.samuraijs.com/api/1.0/users`)
            .then(response => {
                this.props.actions.setUsers(response.data.items)
            });
    }

    render() {
        return <div>
            {
                this.props.users.map(u => <div key={u.id}>
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
                                ? <button onClick={() => { this.props.actions.unfollowUser(u.id) }}>UnFollow</button>
                                : <button onClick={() => { this.props.actions.followUser(u.id) }}>Follow</button>
                            }
                        </div>
                    </span>
                    <span>
                        <div>{u.name}</div>
                        <div></div>
                    </span>
                </div>)
            }
            {/* <button onClick={getUsers}>LoadUsers</button> */}
        </div>
    }
}

export default Users
