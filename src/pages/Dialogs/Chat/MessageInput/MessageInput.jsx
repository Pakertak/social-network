import Button from '../../../../components/Button/Button';
import Textarea from '../../../../components/Textarea/Textarea';
import classes from './MessageInput.module.css';

const MessageInput = ({
    newMessage,
    onMessageTextChange,
    onSendMessageClick
}) => {
    const onMessageChange = (e) => {
        onMessageTextChange({
            text: e.target.value
        });
    };

    return (
        <div className={classes.messageInput}>
            <Textarea 
                placeholder={'Enter your message'}
                onChange={onMessageChange}
                value={newMessage.text}
            />
            <Button onClick={onSendMessageClick}>Send</Button>
        </div>
    );
};

export default MessageInput;