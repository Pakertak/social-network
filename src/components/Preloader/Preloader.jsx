import classes from './Preloader.module.css';
import preloader from '../../assets/imgs/loader.svg';

const Preloader = () => {
    return (
        <div className={classes.preloader}>
            <img src={preloader} alt="" />
        </div>
    );
};

export default Preloader;