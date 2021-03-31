import React from 'react'
import Button from '../../../components/Button/Button';
import Textarea from '../../../components/Textarea/Textarea';
import Post from './Post/Post';
import classes from './Posts.module.css';

const Posts = ({
    postsData,
    newPost,
    addPost,
    updateNewPostText
}) => {

    const postsItems = [].concat(postsData).reverse().map(post => {
        return <Post
            key={post.id}
            message={post.message}
            title={post.title}
            likes={post.likes}
        />
    });


    const createNewPost = () => {
        addPost();
    };

    const onPostTextChange = (e) => {
        updateNewPostText(e.target.value);
    };

    return (
        <div className="container">
            <div className={classes.header}>
                <h3>My posts</h3>
                <div className={classes.add}>
                    <Textarea
                        value={newPost.text}
                        onChange={onPostTextChange}
                    />
                    <Button
                        onClick={createNewPost}
                    >Add post</Button>
                </div>
            </div>
            <div className={classes.posts}>
                {postsItems}
            </div>
        </div>

    );
};

export default Posts;