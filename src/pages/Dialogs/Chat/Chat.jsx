import classes from './Chat.module.css';
import Message from './Message/Message';
import MessageInput from './MessageInput/MessageInput';

const Chat = ({
    messagesData,
    onSendMessageClick
}) => {

    const onAddNewMessage = (values) => {
        onSendMessageClick({text: values.newMessageText});
    };

    let messagesItems = messagesData.map(message => {
        return <Message
            key={message.id}
            text={message.text}
        />
    });

    return (
        <div className={classes.chat}>
            <div className={classes.messages}>
                {messagesItems}
            </div>
            <MessageInput 
                onSubmit={onAddNewMessage}
            />
        </div>

    );
};

export default Chat;