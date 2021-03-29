import { NavLink } from 'react-router-dom';
import classes from './Dialog.module.css';

const Dialog = ({
    id,
    name
}) => {
    return (
        <div className={`${classes.dialog} ${classes.active}`}>
            <NavLink to={`/dialogs/${id}`}>{name}</NavLink>
        </div>
    );
};
export default Dialog;