const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST = 'UPDATE-NEW-POST';

const initialState = {
    postsData: [
        { id: 1, title: 'React', message: 'My post is about react', likes: 21 },
        { id: 2, title: 'React', message: 'My post is about react', likes: 21 },
        { id: 3, title: 'React', message: 'My post is about react', likes: 21 },
        { id: 4, title: 'React', message: 'My post is about react', likes: 21 },
    ],
    newPost: {
        text: ''
    }
};


const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: state.postsData.length + 1,
                message: state.newPost.text,
                title: 'React',
                likes: 0
            };
            state.postsData.push(newPost);
            state.newPost.text = '';
            return state;
        case UPDATE_NEW_POST:
            state.newPost.text = action.newPost.text;
            return state;
        default: return state;
    }
};

export const addPostCreator = () => ({
    type: ADD_POST
});

export const updateNewPostCreator = (newPost) => ({
    type: UPDATE_NEW_POST,
    newPost
});

export default profileReducer;
