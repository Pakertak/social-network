let rerenderEntireTree = () => {
    console.log('State has changed');
};

let state = {
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

};

export const addPost = () => {
    let newPost = {
        id: state.profilePage.postsData.length + 1,
        message: state.profilePage.newPost.text,
        title: 'React',
        likes: 0
    };
    state.profilePage.postsData.push(newPost);
    state.profilePage.newPost.text = '';
    rerenderEntireTree(state);
};

export const updateNewPost = newPost => {
    state.profilePage.newPost.text = newPost.text;
    rerenderEntireTree(state);
};

export const subscribe = (observer) => {
    rerenderEntireTree = observer; 
};

export default state;