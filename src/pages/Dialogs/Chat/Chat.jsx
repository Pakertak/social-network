import classes from './Chat.module.css';
import Message from './Message/Message';
import MessageInput from './MessageInput/MessageInput';

const Chat = ({
    messagesData,
    newMessage,
    dispatch
}) => {

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
                newMessage={newMessage}
                dispatch={dispatch}
            />
        </div>

    );
};

export default Chat;