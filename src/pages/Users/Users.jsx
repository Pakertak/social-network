import React from 'react';
import Button from '../../components/Button/Button';
import classes from './Users.module.css';
import axios from 'axios';
import userPhoto from '../../assets/imgs/user.png';


class Users extends React.Component {
    
    componentDidMount = () => {
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
        .then(response => {
            this.props.setUsers(response.data.items);
        });
    };

    render() {
        const {
            users,
            follow,
            unfollow
        } = this.props;
        
        return (
            <div className={`${classes.users} container page`}>
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
}

export default Users;