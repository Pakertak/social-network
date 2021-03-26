import classes from './Nav.module.css';

const Nav = () => {
    return (
        <nav className={classes.nav}>
            <div className={classes.nav_item}>
                <a href="/profile" className={`${classes.nav_item__link} ${classes.active}`}>Profile</a>
            </div>
            <div className={classes.nav_item}>
                <a href="/messages" className={classes.nav_item__link}>Messages</a>
            </div>
            <div className={classes.nav_item}>
                <a href="news" className={classes.nav_item__link}>News</a>
            </div>
            <div className={classes.nav_item}>
                <a href="music" className={classes.nav_item__link}>Music</a>
            </div>
            <div className={classes.nav_item}>
                <a href="settings" className={classes.nav_item__link}>Settings</a>
            </div>
        </nav>
    );
};

export default Nav;