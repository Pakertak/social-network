import PostsContainer from './Posts/PostsContainer';
import classes from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = ({
    profile,
    status,
    getStatus,
    updateStatus
}) => {
    return (
        <div className={`${classes.profile} container page`}>
            <ProfileInfo
                profile={profile}
                status={status}
                getStatus={getStatus}
                updateStatus={updateStatus}
            />
            {
                profile
                    ? <PostsContainer />
                    : null
            }
        </div>
    );
};

export default Profile;