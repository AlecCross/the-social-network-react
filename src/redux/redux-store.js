import {combineReducers, createStore} from "redux";
import friendsReducer from "./reducers/friends-reducer";
import messagesReducer from "./reducers/messages-reducer";
import profileReducer from "./reducers/profile-reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: messagesReducer,
    friendsPage: friendsReducer,
});

let store = createStore(reducers);

export default store;