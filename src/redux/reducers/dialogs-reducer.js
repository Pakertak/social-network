const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

const initialState = {
    dialogsData: [
        { id: 1, name: 'Dmitry' },
        { id: 2, name: 'Alex' },
        { id: 3, name: 'Valya' },
        { id: 4, name: 'Viktor' }
    ],
    messagesData: [
        { id: 1, text: 'Hi' },
        { id: 2, text: 'How are you?' },
        { id: 3, text: 'I\'m fine.' },
        { id: 4, text: 'Good luck' }
    ],
    newMessage: {
        text: ''
    }
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessage.text = action.newMessage.text;
            return state;
        case SEND_MESSAGE: 
            let newMessage = state.newMessage;
            state.messagesData.push({
                id: state.messagesData.length + 1,
                text: newMessage.text
            });
            newMessage.text = '';
            return state;
        default: return state;
    }
};

export const updateNewMessageCreator = (newMessage) => ({
    type: UPDATE_NEW_MESSAGE_BODY,
    newMessage
});

export const sendMessageCreator = (newMessage) => ({
    type: SEND_MESSAGE,
    newMessage
});

export default dialogsReducer;