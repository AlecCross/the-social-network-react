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


let mapStateToProps = (state) => ({
    users: state.usersPage.users,
    pagesSize: state.usersPage.pagesSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,

});
let mapDispatchToProps = (dispatch) => ({
    actions: {
        followUser: (userID) => { dispatch(followUserAC(userID)) },
        unfollowUser: (userID) => { dispatch(unfollowUserAC(userID)) },
        setUsers: (users) => { dispatch(setUsersAC(users)) },
        setCurrentPage: (currentPage) => { dispatch(setCurrentPage(currentPage)) },
        setTotalUsersCount: (totalUsersCount) => { dispatch(setTotalUsersCount(totalUsersCount)) }
    }
})

const FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(Users);
export default FriendsContainer
