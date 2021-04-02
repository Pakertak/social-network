import Button from '../../components/Button/Button';
import classes from './Users.module.css';
import userPhoto from '../../assets/imgs/user.png';


const Users = ({
    users,
    totalUsersCount,
    pageSize,
    currentPage,
    follow,
    unfollow,
    onPageChanged
}) => {

    const pagesCount = Math.ceil(totalUsersCount / pageSize);
    let pages = [];

    for (let i = 1; i <= pagesCount; i++)
        pages.push(i);

    return (
        <div className={`${classes.users} container page`}>
            {
                pages.map(p => (
                    <span
                        className={currentPage === p && classes.selectedPage}
                        onClick={(e) => onPageChanged(p)}
                    >{p}</span>
                ))
            }
            {
                users.map(u => (<div key={u.id}>
                    <div>
                        <div>
                            <img src={u.photos.small !== null ? u.photos.small : userPhoto} alt="" className={classes.photo} />
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
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </div>
                </div>))
            }
        </div>
    );
};

export default Users;