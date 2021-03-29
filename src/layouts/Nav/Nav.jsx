import { NavLink } from 'react-router-dom';
import classes from './Nav.module.css';

const Nav = () => {
    return (
        <nav className={classes.nav}>
            <div className={classes.nav_item}>
                <NavLink
                    to="/profile"
                    className={classes.nav_item__link}
                    activeClassName={classes.active}
                >Profile</NavLink>
            </div>
            <div className={classes.nav_item}>
                <NavLink
                    to="/dialogs"
                    className={classes.nav_item__link}
                    activeClassName={classes.active}
                >Messages</NavLink>
            </div>
            <div className={classes.nav_item}>
                <NavLink
                    to="news"
                    className={classes.nav_item__link}
                    activeClassName={classes.active}
                >News</NavLink>
            </div>
            <div className={classes.nav_item}>
                <NavLink
                    to="music"
                    className={classes.nav_item__link}
                    activeClassName={classes.active}
                >Music</NavLink>
            </div>
            <div className={classes.nav_item}>
                <NavLink
                    to="settings"
                    className={classes.nav_item__link}
                    activeClassName={classes.active}
                >Settings</NavLink>
            </div>
        </nav>
    );
};

export default Nav;