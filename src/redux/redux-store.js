import authReducer from "./reducers/auth-reducer";
import dialogsReducer from "./reducers/dialogs-reducer";
import profileReducer from "./reducers/profile-reducer";
import sidebarReducer from "./reducers/sidebar-reducer";
import usersReducer from "./reducers/users-reducer";
import thunkMiddleware from 'redux-thunk';

const { createStore, combineReducers, applyMiddleware } = require("redux");
const reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer
});


let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;