import Posts from '../../components/Posts/Posts';
import classes from './Profile.module.css';

const Profile = () => {
    return (
        <div className={classes.content}>
            MainContent
            <Posts />
        </div>
    );
};

export default Profile;