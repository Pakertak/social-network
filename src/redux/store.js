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
                { id: 1, content: 'Hi' },
                { id: 2, content: 'How are you?' },
                { id: 3, content: 'I\'m fine.' },
                { id: 4, content: 'Good luck' }
            ]
        }
    
    },

    getState() {
        return this._state;
    },

    _callSubscriber() {
        console.log('State has changed');
    },

    addPost() {
        let newPost = {
            id: this._state.profilePage.postsData.length + 1,
            message: this._state.profilePage.newPost.text,
            title: 'React',
            likes: 0
        };
        this._state.profilePage.postsData.push(newPost);
        this._state.profilePage.newPost.text = '';
        this._callSubscriber(this);
    },

    updateNewPost(newPost) {
        this._state.profilePage.newPost.text = newPost.text;
        this._callSubscriber(this);
    },

    subscribe(observer) {
        this._callSubscriber = observer; 
    }
};


export default store;