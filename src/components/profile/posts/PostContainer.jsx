//import s from './Posts.module.css';
import React from 'react';
import {
    addPostActionCreator,
    updateNewPostTextActionCreator
} from '../../../redux/reducers/profile-reducer';
import Posts from './Posts';
import { connect } from 'react-redux';

// const PostContainer = (props) => {
//     let state = props.store.getState();
//     let addPost = () => {
//         props.store.dispatch(addPostActionCreator());
//     }
//     let onPostChange = (text) => {
//         let action = updateNewPostTextActionCreator(text);
//         props.store.dispatch(action);
//     }
//     return (<Posts updateNewPostText={onPostChange}
//         addPost={addPost} posts={state.profilePage.posts}
//         newPostText={state.profilePage.newPostText} />)
// }
let mapStateToProps = (state) => ({profilePage: state.profilePage});
let mapDispatchToProps = (dispatch) => ({
    addPost: () => {dispatch(addPostActionCreator())},
    updateNewPostText: (text) => {dispatch(updateNewPostTextActionCreator(text))},
});

const PostContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default PostContainer