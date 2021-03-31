import { connect } from 'react-redux';
import { sendMessageCreator, updateNewMessageCreator } from '../../redux/reducers/dialogs-reducer';
import Dialogs from './Dialogs';

const mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        changeMessageText: (newMessage) => {
            dispatch(updateNewMessageCreator(newMessage));
        },
        sendMessage: () => {
            dispatch(sendMessageCreator());
        }
    };
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;