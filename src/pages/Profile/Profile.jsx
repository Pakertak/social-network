import Posts from './Posts/Posts';
import classes from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = ({
    state
}) => {
    const postsData = state.postsData;

    return (
        <div className={`${classes.content} container`}>
            <ProfileInfo />
            MainContent
            <Posts 
              postsData={postsData}  
            />
        </div>
    );
};

export default Profile;