import {combineReducers, createStore} from "redux";
import usersReducer from "./reducers/users-reducer";
import messagesReducer from "./reducers/messages-reducer";
import profileReducer from "./reducers/profile-reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: messagesReducer,
    usersPage: usersReducer,
});

let store = createStore(reducers);

window.store = store;

export default store;