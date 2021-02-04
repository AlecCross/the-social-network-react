import {
    addPostActionCreator,
    updateNewPostTextActionCreator
} from '../../../redux/reducers/profile-reducer';
import Posts from './Posts';
import { connect } from 'react-redux';

let mapStateToProps = (state) => ({profilePage: state.profilePage});
let mapDispatchToProps = (dispatch) => ({
    addPost: () => {dispatch(addPostActionCreator())},
    updateNewPostText: (text) => {dispatch(updateNewPostTextActionCreator(text))},
});

const PostContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default PostContainer