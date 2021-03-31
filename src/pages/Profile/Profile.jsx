import PostsContainer from './Posts/PostsContainer';
import classes from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = ({
    store
}) => {

    return (
        <div className={`${classes.profile} container page`}>
            <ProfileInfo />
            MainContent
            <PostsContainer 
              store={store}
            />
        </div>
    );
};

export default Profile;