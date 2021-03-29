import Posts from './Posts/Posts';
import classes from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = ({
    state,
    addPost,
    updateNewPost
}) => {
    const postsData = state.postsData;
    const newPost = state.newPost;

    return (
        <div className={`${classes.content} container`}>
            <ProfileInfo />
            MainContent
            <Posts 
              postsData={postsData} 
              newPost={newPost}
              addPost={addPost}
              updateNewPost={updateNewPost}
            />
        </div>
    );
};

export default Profile;