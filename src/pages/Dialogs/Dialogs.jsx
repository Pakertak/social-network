import Chat from './Chat/Chat';
import Dialog from './Dialog/Dialog';
import classes from './Dialogs.module.css';

const Dialogs = ({
    dialogsPage,
    changeMessageText,
    sendMessage
}) => {
    const dialogsData = dialogsPage.dialogsData;
    const dialogsItems = dialogsData.map(dialog => {
        return <Dialog
            key={dialog.id}
            id={dialog.id}
            name={dialog.name}
        />
    });
    return (
        <div className={`${classes.dialogs} container page`}>
            <div className={classes.dialogs_list}>
                {dialogsItems}
            </div>
            <Chat
                messagesData={dialogsPage.messagesData}
                onSendMessageClick={sendMessage}
            />
        </div>
    );
};

export default Dialogs;