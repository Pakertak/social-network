import classes from './Message.module.css';

const Message = ({
    content
}) => {
    return (
        <div className={classes.message}>
            {content}
        </div>
    );
};

export default Message;