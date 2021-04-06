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
    ]
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE: {
            const newMessageData = {
                id: state.messagesData.length + 1,
                text: action.newMessage.text
            };
            return {
                ...state,
                messagesData: [...state.messagesData, newMessageData]
            };
        }
        default: return state;
    }
};

export const sendMessageCreator = (newMessage) => ({
    type: SEND_MESSAGE,
    newMessage
});

export default dialogsReducer;