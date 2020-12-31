let stockAvatar = 'https://lumpics.ru/wp-content/uploads/2017/11/Programmyi-dlya-sozdaniya-avatarok.png';
let store = {

    // setStockAvatar: () =>{
        
    // },

    // getStockAvatar: () =>{
    //     let stockAvatar = 'https://lumpics.ru/wp-content/uploads/2017/11/Programmyi-dlya-sozdaniya-avatarok.png';
    //     return stockAvatar;
    // },

    _state: {
        profilePage: {
            posts: [
                { id: 1, text: 'Пост1', avatar: stockAvatar },
                { id: 2, text: 'Пост2', avatar: stockAvatar },
                { id: 3, text: 'Пост3', avatar: stockAvatar },
                { id: 4, text: 'Пост4', avatar: stockAvatar },
            ],
            newPostText: 'it-kamasutra.com',
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
            ],
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
    addPost() {
        let newPost = {
            id: 5,
            text: this._state.profilePage.newPostText,
            avatar: stockAvatar,
        }
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this.callSubscriber(this._state);
    },
    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this.callSubscriber(this._state);
    },
    subscribe(observer) {
        this.callSubscriber = observer;
    }
}

export default store;