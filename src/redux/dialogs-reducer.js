const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    messagesData: [
        {id: 1, message: "Hi!"},
        {id: 2, message: "How are you doing"},
        {id: 3, message: "What's up?"},
    ],
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
                message: action.newMessage,
            };
            let stateCopy = {...state};
            stateCopy.messagesData = [...state.messagesData];
            stateCopy.messagesData.push(newMessage);
            return stateCopy;
        }
        default:
            return state;
    }
}

export let sendMessage = (newMessage) => ({ type: SEND_MESSAGE, newMessage });

export default dialogsReducer;