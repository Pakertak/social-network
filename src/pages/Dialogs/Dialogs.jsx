import Chat from './Chat/Chat';
import Dialog from './Dialog/Dialog';
import classes from './Dialogs.module.css';

const Dialogs = ({
    state,
    dispatch
}) => {
    const dialogsData = state.dialogsData;
    const messagesData = state.messagesData;
    const newMessage = state.newMessage;

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
                    messagesData={messagesData}
                    newMessage={newMessage}
                    dispatch={dispatch}
                />
            </div>
    );
};

export default Dialogs;