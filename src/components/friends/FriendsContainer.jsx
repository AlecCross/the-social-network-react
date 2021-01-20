import {
    followUserAC,
    unfollowUserAC,
    setUsersAC
} from '../../redux/reducers/users-reducer';
import { connect } from 'react-redux';
// import Friends from './Friends';
import Users from './Users';


let mapStateToProps = (state) => ({ users: state.usersPage.users });
let mapDispatchToProps = (dispatch) => ( {actions:{
    followUser:    (userID) => {dispatch(followUserAC(userID))}, 
    unfollowUser:  (userID) => {dispatch(unfollowUserAC(userID))},
    setUsers:       (users) => {dispatch(setUsersAC(users))}
}})
    
const FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(Users);
export default FriendsContainer
