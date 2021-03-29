import Chat from './Chat/Chat';
import Dialog from './Dialog/Dialog';
import classes from './Dialogs.module.css';

const Dialogs = ({
    dialogsData,
    messagesData
}) => {

    const dialogsItems = dialogsData.map(dialog => {
        return <Dialog
            key={dialog.id}
            name={dialog.name}
        />
    });
    return (
        <div className="container">
            <div className={classes.dialogs}>
                <div className={classes.dialogs_list}>
                    {dialogsItems}
                </div>
                <Chat
                    messagesData={messagesData}
                />
            </div>
        </div>
    );
};

export default Dialogs;