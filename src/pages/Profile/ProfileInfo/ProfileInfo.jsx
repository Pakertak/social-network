import Preloader from '../../../components/Preloader/Preloader';
import classes from './ProfileInfo.module.css';

const ProfileInfo = ({
    profile
}) => {

    if (!profile) {
        return <Preloader />
    }
    return (
        <div className={classes.profileInfo}>
            <img src={profile.photos.large} alt="" />
            ava + description
        </div>
    );
};

export default ProfileInfo;