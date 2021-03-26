import Post from './Post/Post';
import classes from './Posts.module.css';

const Posts = () => {
    return (
        <div className="container">
            <Post 
                message='My post is about react'
                title='React'
            />
        </div>
    );
};

export default Posts;