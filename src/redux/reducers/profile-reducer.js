const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_POST = 'ADD-POST';
let stockAvatar =
    'https://lumpics.ru/wp-content/uploads/2017/11/Programmyi-dlya-sozdaniya-avatarok.png';

let initialState = {
    posts: [
        { id: 1, text: 'Пост1', avatar: stockAvatar },
        { id: 2, text: 'Пост2', avatar: stockAvatar },
        { id: 3, text: 'Пост3', avatar: stockAvatar },
        { id: 4, text: 'Пост4', avatar: stockAvatar },
    ],
    newPostText: '',
};

const profileReducer = ( state = initialState, action) => {
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