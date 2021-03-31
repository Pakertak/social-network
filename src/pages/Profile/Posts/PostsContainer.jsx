import React from 'react'
import { addPostCreator, updateNewPostCreator } from '../../../redux/reducers/profile-reducer'
import Posts from './Posts';

const PostsContainer = ({
    store
}) => {

    const state = store.getState();
    const dispatch = store.dispatch;

    const addPost = () => {
        dispatch(addPostCreator());
    };

    const updateNewPostText = (text) => {
        dispatch(updateNewPostCreator({
            text
        }));
    };

    return (
        <Posts
            postsData={state.profilePage.postsData}
            newPost={state.profilePage.newPost}
            addPost={addPost}
            updateNewPostText={updateNewPostText}
        />
    );
};

export default PostsContainer;