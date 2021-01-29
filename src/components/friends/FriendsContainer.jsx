import React from 'react';
import {
    followUserAC,
    unfollowUserAC,
    setUsersAC,
    setCurrentPage,
    setTotalUsersCount
} from '../../redux/reducers/users-reducer';
import { connect } from 'react-redux';
// import Friends from './Friends';
import Users from './Users';
import * as axios from 'axios';


class UsersContainer extends React.Component {
    componentDidMount() {

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pagesSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            });
    }

    onPageChanged(pageNumber) {
        debugger

        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pagesSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
            });
    }

    render() {
        return <Users
            totalUsersCount={this.props.totalUsersCount}
            pagesSize={this.props.pagesSize}
            currentPage={this.props.currentPage}
            onPageChanged={this.onPageChanged}
            users={this.props.users}
            followUser={this.props.followUser}
            unfollowUser={this.props.unfollowUser}
        />
    }
}

let mapStateToProps = (state) => ({
    users: state.usersPage.users,
    pagesSize: state.usersPage.pagesSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,

});

let mapDispatchToProps = (dispatch) => ({
    followUser: (userID) => { dispatch(followUserAC(userID)) },
    unfollowUser: (userID) => { dispatch(unfollowUserAC(userID)) },
    setUsers: (users) => { dispatch(setUsersAC(users)) },
    setCurrentPage: (currentPage) => { dispatch(setCurrentPage(currentPage)) },
    setTotalUsersCount: (totalUsersCount) => { dispatch(setTotalUsersCount(totalUsersCount)) }
})

const FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
export default FriendsContainer
