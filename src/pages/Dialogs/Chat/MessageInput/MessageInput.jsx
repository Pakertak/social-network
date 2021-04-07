import classes from './MessageInput.module.css';
import { Field, reduxForm } from 'redux-form';
import Button from '../../../../components/FormControls/Button/Button';
import Textarea from '../../../../components/FormControls/Textarea/Textarea';
import { maxLengthCreator, required } from '../../../../utils/validators';

const maxLength100 = maxLengthCreator(100);

let MessageInput = (props) => {

    return (
        <form onSubmit={props.handleSubmit} className={classes.messageInput}>
            <Field
                component={Textarea}
                name={'newMessageText'}
                placeholder={'Enter your message'}
                validate={[required, maxLength100]}
            />
            <Button>Send</Button>
        </form>
    );
};

MessageInput = reduxForm({ form: 'dialogMessageInput' })(MessageInput)

export default MessageInput;