import messagesReducer from "./reducers/messages-reducer";
import profileReducer from "./reducers/profile-reducer";

let stockAvatar =
    'https://lumpics.ru/wp-content/uploads/2017/11/Programmyi-dlya-sozdaniya-avatarok.png';

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

    dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action, stockAvatar)
    this._state.messagesPage = messagesReducer(this._state.messagesPage, action)
    this.callSubscriber(this._state);
    }
}
export default store;