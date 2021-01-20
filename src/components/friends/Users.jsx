import * as axios from 'axios';
import React from 'react';
import userPhoto from '..//..//assets/images/avatar.svg';
import styles from './Friends.module.css';

class Users extends React.Component {
    componentDidMount() {

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pagesSize}`)
            .then(response => {
                this.props.actions.setUsers(response.data.items);
                this.props.actions.setTotalUsersCount(response.data.totalCount);
            });

    }
    debugger
    onPageChanged(pageNumber) {
        this.props.actions.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pagesSize}`)
            .then(response => {
                this.props.actions.setUsers(response.data.items);
            });
    }

    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pagesSize);
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }

        return <div>
            <div>
                {pages.map(p => {
                    return (
                        <span className={this.props.currentPage === p && styles.selectPage}
                            onClick={() => {this.onPageChanged(p);}}>{p}</span>
                    )
                })}
            </div>
            {
                this.props.users.map(u => <div key={u.id}>
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
