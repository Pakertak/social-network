import Button from '../../../../components/Button/Button';
import Textarea from '../../../../components/Textarea/Textarea';
import { sendMessageCreator, updateNewMessageCreator } from '../../../../redux/reducers/dialogs-reducer';
import classes from './MessageInput.module.css';

const MessageInput = ({
    newMessage,
    dispatch
}) => {

    const onMessageTextChange = (e) => {
        newMessage.text = e.target.value;
        dispatch(updateNewMessageCreator(newMessage));
    };
    
    const onSendMessageClick = () => {
        dispatch(sendMessageCreator());
    };

    return (
        <div className={classes.messageInput}>
            <Textarea 
                placeholder={'Enter your message'}
                onChange={onMessageTextChange}
                value={newMessage.text}
            />
            <Button onClick={onSendMessageClick}>Send</Button>
        </div>
    );
};

export default MessageInput;