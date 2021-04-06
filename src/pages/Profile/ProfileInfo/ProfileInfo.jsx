import Preloader from '../../../components/Preloader/Preloader';
import classes from './ProfileInfo.module.css';
import userPhoto from '../../../assets/imgs/user.png';
import ProfileStatus from './ProfileStatus/ProfileStatus';

const ProfileInfo = ({
    profile,
    status,
    updateStatus
}) => {

    if (!profile) {
        return <Preloader />
    }
    return (
        <div className={`${classes.profileInfo} container`}>
            <img src={profile.photos.large ? profile.photos.large : userPhoto} alt="" />
            ava + description
            <ProfileStatus 
                status={status}
                updateStatus={updateStatus}
            />
        </div>
    );
};

export default ProfileInfo;