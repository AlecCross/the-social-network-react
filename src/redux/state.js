let stockAvatar =
    'https://lumpics.ru/wp-content/uploads/2017/11/Programmyi-dlya-sozdaniya-avatarok.png';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_POST = 'ADD-POST';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let store = {

    _state: {
        profilePage: {
            posts: [
                { id: 1, text: 'Пост1', avatar: stockAvatar },
                { id: 2, text: 'Пост2', avatar: stockAvatar },
                { id: 3, text: 'Пост3', avatar: stockAvatar },
                { id: 4, text: 'Пост4', avatar: stockAvatar },
            ],
            newPostText: '',
        },

        messagesPage: {
            dialogs: [
                { id: 1, name: 'Andrew' },
                { id: 2, name: 'Sasha' },
                { id: 3, name: 'Vova' },
                { id: 4, name: 'Ira' },
                { id: 5, name: 'Vika' },
                { id: 6, name: 'Dasha' },
            ],
            messages: [
                { id: 1, message: 'Привет!' },
                { id: 2, message: 'Доров' },
                { id: 3, message: 'Как там с поиском работы?' },
                { id: 3, message: 'Как там с поиском работы2?' },
            ],
            newMessageBody: ''
        },

        friendsPage: {
            friends: [
                { id: 1, name: 'friend1', avatar: stockAvatar },
                { id: 2, name: 'friend2', avatar: stockAvatar },
                { id: 3, name: 'friend3', avatar: stockAvatar },
                { id: 4, name: 'friend4', avatar: stockAvatar },
                { id: 5, name: 'friend5', avatar: stockAvatar },
                { id: 6, name: 'friend6', avatar: stockAvatar },
                { id: 7, name: 'friend7', avatar: stockAvatar },
            ],
        },
    },
    getState() {
        return this._state;
    },

    callSubscriber() {

    },
    subscribe(observer) {
        this.callSubscriber = observer;
    },

    dispatch(action) { // {type: 'SOME-TYPE'}
        if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this.callSubscriber(this._state);
        }
        else if (action.type === ADD_POST) {
            let newPost = {
                id: 5,
                text: this._state.profilePage.newPostText,
                avatar: stockAvatar,
            }
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this.callSubscriber(this._state);
        }
        else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.messagesPage.newMessageBody = action.body;
            this.callSubscriber(this._state);
        }
        else if (action.type === SEND_MESSAGE) {
            let body = this._state.messagesPage.newMessageBody;
            this._state.messagesPage.newMessageBody = '';
            this._state.messagesPage.messages.push({ id: 6, message: body });
            this.callSubscriber(this._state);
        }
    }
}

export const updateNewPostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT, newText: text,
    }
}
export const addPostActionCreator = () => ({ type: ADD_POST })

export const updateNewMessageBogyCreator = (body) => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY, body: body,
    }
}
export const sendMessageCreator = () => ({ type: SEND_MESSAGE })

export default store;