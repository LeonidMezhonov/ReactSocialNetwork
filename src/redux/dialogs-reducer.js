const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT';

const dialogsReducer = (state, action) => {
    switch(action.type) {
        case SEND_MESSAGE:
            let newMessage = {
                id: state.messagesData.length + 1,
                message: state.newMessage,
            };
            state.messagesData.push(newMessage);
            state.newMessage = '';
            return state;
        case UPDATE_MESSAGE_TEXT: 
            state.newMessage = action.newText;
            return state;
        default:
            return state;
    }
}

export default dialogsReducer;