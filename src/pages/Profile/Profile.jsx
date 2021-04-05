import PostsContainer from './Posts/PostsContainer';
import classes from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = ({
    profile,
    setUserProfile
}) => {
    return (
        <div className={`${classes.profile} container page`}>
            <ProfileInfo
                profile={profile}
                setUserProfile={setUserProfile}
            />
            MainContent
            <PostsContainer />
        </div>
    );
};

export default Profile;