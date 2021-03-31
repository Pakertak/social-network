import { sendMessageCreator, updateNewMessageCreator } from '../../redux/reducers/dialogs-reducer';
import Dialogs from './Dialogs';

const DialogsContainer = ({
    store
}) => {
    const state = store.getState().dialogsPage;
    const dispatch = store.dispatch;

    const onMessageTextChange = (newMessage) => {
        dispatch(updateNewMessageCreator(newMessage));
    };
    
    const onSendMessageClick = () => {
        dispatch(sendMessageCreator());
    };

    return (
        <Dialogs 
            state={state}
            onMessageTextChange={onMessageTextChange}
            onSendMessageClick={onSendMessageClick}
        />
    );
};

export default DialogsContainer;