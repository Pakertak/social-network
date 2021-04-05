import { NavLink } from 'react-router-dom';
import classes from './Header.module.css';

const Header = ({
    isAuth,
    login
}) => {
    return (
        <header className={classes.header}>
            <img src="https://www.vokrug.tv/pic/person/5/e/3/a/5e3a5dce34da50a60def144e469a63f6.jpeg" alt="" />
        
            <div className={classes.loginBlock}>
                {
                    isAuth 
                    ? login
                    : <NavLink to={'/login'}>Login</NavLink>
                }
                
            </div>
        </header>
    );
};

export default Header;