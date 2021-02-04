let FOLLOW = 'FOLLOW';
let UNFOLLOW = 'UNFOLLOW';
let SET_USERS = 'SET_USERS';
let SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
let SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';

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
    users: [],
    pagesSize: 4,
    totalUsersCount: 0,
    currentPage: 2,
}

const usersReducer = (state = initialState, action) => {
 
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return { ...u, isFollowed: true }
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return { ...u, isFollowed: false }
                    }
                    return u;
                })
            }
        case SET_USERS:
            return {
                ...state,
                users: [...action.users]
            }
        case SET_CURRENT_PAGE:
            return {
                ...state, currentPage: action.currentPage
            }
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state, totalUsersCount: action.count
            }
        default:
            return state;
    }
}
export const followUser = (userID) => ({ type: FOLLOW, userID })
export const unfollowUser = (userID) => ({ type: UNFOLLOW, userID })
export const setUsers = (users) => ({ type: SET_USERS, users })
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage: currentPage})
export const setTotalUsersCount = (totalUsersCount) => ({ type: SET_TOTAL_USERS_COUNT, count: totalUsersCount})

export default usersReducer
