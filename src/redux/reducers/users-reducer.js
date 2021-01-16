let FOLLOW = 'FOLLOW';
let UNFOLLOW = 'UNFOLLOW';
let SET_USERS = 'SET_USERS';

// let initialState = {
//     users: [
//         { id: 1, name: 'friend1', avatar: stockAvatar, isFollowed: false, },
//         { id: 2, name: 'friend2', avatar: stockAvatar, isFollowed: false, },
//         { id: 3, name: 'friend3', avatar: stockAvatar, isFollowed: false, },
//         { id: 4, name: 'friend4', avatar: stockAvatar, isFollowed: true, },
//         { id: 5, name: 'friend5', avatar: stockAvatar, isFollowed: false, },
//         { id: 6, name: 'friend6', avatar: stockAvatar, isFollowed: false, },
//         { id: 7, name: 'friend7', avatar: stockAvatar, isFollowed: false, },
//     ]
// }

let initialState = {
    users: []
}

const usersReducer = (state = initialState, action) => {
 
    switch (action.type) {
        case 'FOLLOW':
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return { ...u, isFollowed: true }
                    }
                    return u;
                })
            }
        case 'UNFOLLOW':
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return { ...u, isFollowed: false }
                    }
                    return u;
                })
            }
        case 'SET_USERS':
            return {
                ...state,
                users: [...state.users,  ...action.users]
            }
        default:
            return state;
    }
}
export const followUserAC = (userID) => ({ type: FOLLOW, userID })
export const unfollowUserAC = (userID) => ({ type: UNFOLLOW, userID })
export const setUsersAC = (users) => ({ type: SET_USERS, users })

export default usersReducer
