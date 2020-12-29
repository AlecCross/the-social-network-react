import {reRender} from "./../render";



let stockAvatar = 'https://lumpics.ru/wp-content/uploads/2017/11/Programmyi-dlya-sozdaniya-avatarok.png';
let state = {
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
 
    friendsPage:{
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
}

export let addPost = (post) =>{
    let newPost = {
        id: 5,
        text: post,
        avatar: stockAvatar,
    };
    state.profilePage.posts.push(newPost);
    reRender(state);
}
export let updateNewPostText = (newText) =>{
    state.profilePage.newPostText=newText;
    reRender(state);
}

export default state