import Button from '../../../../components/Button/Button';
import classes from './MessageInput.module.css';
import { Field, reduxForm } from 'redux-form';

let MessageInput = (props) => {

    return (
        <form onSubmit={props.handleSubmit} className={classes.messageInput}>
            <Field component={"textarea"} name={'newMessageText'} placeholder={'Enter your message'} />
            <Button>Send</Button>
        </form>
    );
};

MessageInput = reduxForm({form: 'dialogMessageInput'})(MessageInput)

export default MessageInput;