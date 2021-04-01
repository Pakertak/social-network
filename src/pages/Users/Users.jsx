import Button from '../../components/Button/Button';
import classes from './Users.module.css';

const Users = ({
    users,
    follow,
    unfollow
}) => {

    return (
        <div className={`${classes.users} container page`}>
            {
                users.map(u => (<div key={u.id}>
                    <div>
                        <div>
                            <img src={u.photoUrl} alt="" className={classes.photo} />
                        </div>
                        <div>
                            {
                                u.followed
                                    ? <Button onClick={() => unfollow(u.id)}>Unfollow</Button>
                                    : <Button onClick={() => follow(u.id)}>Follow</Button>
                            }
                        </div>
                    </div>
                    <div>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </div>
                    <div>
                        <div>{u.location.city}</div>
                        <div>{u.location.country}</div>
                    </div>
                </div>))
            }
        </div>
    );
};

export default Users;