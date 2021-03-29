import classes from './Chat.module.css';
import Message from './Message/Message';

const Chat = ({
    messagesData
}) => {

    let messagesItems = messagesData.map(message => {
        return <Message
            key={message.id}
            content={message.content}
        />
    });

    return (
        <div className={classes.chat}>
            {messagesItems}
        </div>
    );
};

export default Chat;