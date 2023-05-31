import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT';

let store = {
    _state: {
        profilePage: {
            postsData: [
                {id: 2, post: "My second post"},
                {id: 1, post: "My first post"},
            ],
            newPostText: '',
        },
        messagesPage: {
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
        },
    },
    _callSubscriber() {
        console.log('state was changed');
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagesPage = dialogsReducer(this._state.messagesPage, action);

        this._callSubscriber(this._state);
    }, 
}

export default store;