import React from 'react';
import Post from './Post/Post';
import PostInput from './PostInput/PostInput';
import classes from './Posts.module.css';

const Posts = ({
    postsData,
    addPost
}) => {

    const postsItems = [].concat(postsData).reverse().map(post => {
        return <Post
            key={post.id}
            message={post.message}
            title={post.title}
            likes={post.likes}
        />
    });


    const createNewPost = (values) => {
        addPost({text: values.newPostText});
    };

    return (
        <div className="container">
            <div className={classes.header}>
                <h3>My posts</h3>
                <div>
                    <PostInput onSubmit={createNewPost}/>
                </div>
            </div>
            <div className={classes.posts}>
                {postsItems}
            </div>
        </div>

    );
};

export default Posts;