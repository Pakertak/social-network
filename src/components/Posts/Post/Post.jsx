import classes from './Post.module.css';

const Post = ({
    message, title
}) => {
    return (
        <div className={classes.post}>
            <div className={classes.post_user}>
                <img src="https://citaty.info/files/characters/48451.jpg" alt="" className={classes.post_user__photo} />
                <div className={classes.post_username}>@Babuyn</div>
            </div>
            <div className={classes.post_title}>{title}</div>
            <div className={classes.post_content}>{message}</div>
        </div>
    );
};

export default Post;