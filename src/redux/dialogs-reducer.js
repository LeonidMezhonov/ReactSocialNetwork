const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT';

let initialState = {
    messagesData: [
        {id: 1, message: "Hi!"},
        {id: 2, message: "How are you doing"},
        {id: 3, message: "What's up?"},
    ],
    newMessage: '',
    dialogData: [
        {id: 1, name: 'JOHN'},
        {id: 2, name: 'DAVID'},
        {id: 3, name: 'PETER'},
        {id: 4, name: 'ANNA'},
        {id: 5, name: 'ROSE'},
        {id: 6, name: 'DICK'},
    ],
};

const dialogsReducer = (state = initialState, action) => {
    switch(action.type) {
        case SEND_MESSAGE: {
            let newMessage = {
                id: state.messagesData.length + 1,
                message: state.newMessage,
            };
            let stateCopy = {...state};
            stateCopy.messagesData = [...state.messagesData];
            stateCopy.messagesData.push(newMessage);
            stateCopy.newMessage = '';
            return stateCopy;
        }
        case UPDATE_MESSAGE_TEXT: {
            let stateCopy = {...state};
            stateCopy.newMessage = action.newText;
            return stateCopy;
        }
        default:
            return state;
    }
}

export let sendMessageActionCreator = () => ({ type: SEND_MESSAGE });

export let updateMessageTextActionCreator = (text) => {
    return {
        type: UPDATE_MESSAGE_TEXT,
        newText: text,
    }
}

export default dialogsReducer;