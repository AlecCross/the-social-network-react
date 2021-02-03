const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
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
    profile: null //профиля пока нет он еще не проинициал
};

const profileReducer = ( state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_POST_TEXT:
            return{
                ...state,
                newPostText: action.newText
            }
        case ADD_POST:
            let newPost = {
                id: 5,
                text: state.newPostText,
                avatar: stockAvatar
            }
            return{
                ...state,
                posts: [newPost, ...state.posts],
                newPostText: ''
            }
        case SET_USER_PROFILE:
            return{
                ...state, profile: action.profile
            }
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
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })
export default profileReducer