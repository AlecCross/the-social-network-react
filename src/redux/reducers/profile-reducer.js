const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_POST = 'ADD-POST';

const profileReducer = (state, action, stockAvatar) => {
    switch (action.type) {
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        case ADD_POST:
            let newPost = {
                id: 5,
                text: state.newPostText,
                avatar: stockAvatar,
            }
            state.posts.unshift(newPost);
            state.newPostText = '';
            return state;
        default:
            return state;
    }
}

export const updateNewPostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT, newText: text,
    }
}
export const addPostActionCreator = () => ({ type: ADD_POST })
export default profileReducer