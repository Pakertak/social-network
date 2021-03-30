import Posts from './Posts/Posts';
import classes from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = ({
    state,
    dispatch
}) => {
    const postsData = state.postsData;
    const newPost = state.newPost;

    return (
        <div className={`${classes.profile} container page`}>
            <ProfileInfo />
            MainContent
            <Posts 
              postsData={postsData} 
              newPost={newPost}
              dispatch={dispatch}
            />
        </div>
    );
};

export default Profile;