import { profileAPI, usersAPI } from "../../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET-STATUS';

const initialState = {
    profile: null,
    status: "",
    postsData: [
        { id: 1, title: 'React', message: 'My post is about react', likes: 21 },
        { id: 2, title: 'React', message: 'My post is about react', likes: 21 },
        { id: 3, title: 'React', message: 'My post is about react', likes: 21 },
        { id: 4, title: 'React', message: 'My post is about react', likes: 21 },
    ]
};


const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            const newPostData = {
                id: state.postsData.length + 1,
                message: action.newPost.text,
                title: 'React',
                likes: 0
            };
            return {
                ...state,
                postsData: [...state.postsData, newPostData]
            };
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            };
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        default: return state;
    }
};

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                    ACTIONS
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const addPost = (newPost) => ({ type: ADD_POST, newPost });
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });
export const setStatus = (status) => ({ type: SET_STATUS, status });

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                    THUNKS
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const getUserProfile = (userId) => (dispatch) => {
    profileAPI.getProfile(userId).then(data => {
        dispatch(setUserProfile(data));
    });
};

export const getStatus = (userId) => (dispatch) => {
    profileAPI.getStatus(userId).then(data => {
        dispatch(setStatus(data));
    });
};

export const updateStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status).then(data => {
        if (data.resultCode === 0) {
            dispatch(setStatus(status));
        }
    });
};

export default profileReducer;
