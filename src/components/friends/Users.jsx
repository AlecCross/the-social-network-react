import React from 'react';
import userPhoto from '..//..//assets/images/avatar.svg';
import styles from './Friends.module.css';

const Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pagesSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div>
            <div>
                {pages.map(p => {
                    alert(`${props.totalUsersCount}`);
                    debugger
                    this.props.setTotalUsersCount = 20;
                    debugger
                    alert(`${props.totalUsersCount}`);
                    return (
                        <span className={props.currentPage === p && styles.selectPage}
                            onClick={() => { props.onPageChanged(p); 
                                debugger;
                        }}>{p}</span>
                    )
                })}
            </div>
            {
                props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img className={styles.userPhoto} src={
                                u.uniqueUrlName === null
                                    ? userPhoto
                                    : u.uniqueUrlName
                            } alt={u.name} />
                        </div>
                        <div>
                            {u.isFollowed
                                ? <button onClick={() => { props.unfollowUser(u.id) }}>UnFollow</button>
                                : <button onClick={() => { props.followUser(u.id) }}>Follow</button>
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
    )
}

export default Users
