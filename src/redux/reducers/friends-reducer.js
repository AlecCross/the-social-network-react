let stockAvatar =
    'https://lumpics.ru/wp-content/uploads/2017/11/Programmyi-dlya-sozdaniya-avatarok.png';

let initialState = {
    friends:[
    { id: 1, name: 'friend1', avatar: stockAvatar },
    { id: 2, name: 'friend2', avatar: stockAvatar },
    { id: 3, name: 'friend3', avatar: stockAvatar },
    { id: 4, name: 'friend4', avatar: stockAvatar },
    { id: 5, name: 'friend5', avatar: stockAvatar },
    { id: 6, name: 'friend6', avatar: stockAvatar },
    { id: 7, name: 'friend7', avatar: stockAvatar },
    ]
}

const friendsReducer = (state = initialState, action) =>{
    return state;
}

export default friendsReducer
