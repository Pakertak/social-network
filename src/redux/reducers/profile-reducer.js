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
        case ADD_POST: {
            const newPostData = {
                id: state.postsData.length + 1,
                message: state.newPost.text,
                title: 'React',
                likes: 0
            };
            let stateCopy = {
                ...state,
                postsData: [...state.postsData, newPostData],
                newPost: {
                    ...state.newPost,
                    text: ''
                }
            };
            return stateCopy;
        }
        case UPDATE_NEW_POST: {
            let stateCopy = {
                ...state,
                newPost: {
                    ...state.newPost,
                    text: action.newPost.text
                }
            };
            return stateCopy;
        }
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
