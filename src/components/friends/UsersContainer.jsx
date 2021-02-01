import React from 'react';
import {
    followUserAC,
    unfollowUserAC,
    setUsersAC,
    setCurrentPageAC,
    setTotalUsersCountAC
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
        let pageNumber1 = pageNumber;
        this.props.setCurrentPage(pageNumber1);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
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

export default connect(mapStateToProps, {
    followUser: followUserAC,
    unfollowUser: unfollowUserAC,
    setUsers: setUsersAC,
    setCurrentPage: setCurrentPageAC,
    setTotalUsersCount: setTotalUsersCountAC
})(UsersContainer);

