import dialogsReducer from "./reducers/dialogs-reducer";
import profileReducer from "./reducers/profile-reducer";
import sidebarReducer from "./reducers/sidebar-reducer";

let store = {
    _state: {
        profilePage: {
            postsData: [
                { id: 1, title: 'React', message: 'My post is about react', likes: 21 },
                { id: 2, title: 'React', message: 'My post is about react', likes: 21 },
                { id: 3, title: 'React', message: 'My post is about react', likes: 21 },
                { id: 4, title: 'React', message: 'My post is about react', likes: 21 },
            ],
            newPost: {
                text: ''
            }
        },

        dialogsPage: {
            dialogsData: [
                { id: 1, name: 'Dmitry' },
                { id: 2, name: 'Alex' },
                { id: 3, name: 'Valya' },
                { id: 4, name: 'Viktor' }
            ],
            messagesData: [
                { id: 1, text: 'Hi' },
                { id: 2, text: 'How are you?' },
                { id: 3, text: 'I\'m fine.' },
                { id: 4, text: 'Good luck' }
            ],
            newMessage: {
                text: ''
            }
        },

        sidebar: {}

    },

    _callSubscriber() {
        console.log('State has changed');
    },

    getState() {
        return this._state;
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        this._callSubscriber(this);
    }
};


export default store;