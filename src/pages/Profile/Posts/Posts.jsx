import Button from '../../../components/Button/Button';
import Textarea from '../../../components/Textarea/Textarea';
import Post from './Post/Post';
import classes from './Posts.module.css';

const Posts = ({
    postsData
}) => {

    const postsItems = postsData.map(post => {
        return <Post
            key={post.id}
            message={post.message}
            title={post.title}
        />
    });

    return (
        <div className="container">
            <div className={classes.header}>
                <h3>My posts</h3>
                <div className={classes.add}>
                    <Textarea />
                    <Button>Add post</Button>
                </div>
            </div>
            <div className={`${classes.posts}`}>
                {postsItems}
            </div>
        </div>

    );
};

export default Posts;