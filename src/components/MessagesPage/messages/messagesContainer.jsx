import React from 'react';
import { sendMessageActionCreator, updateMessageTextActionCreator } from '../../../redux/dialogs-reducer';
import Messages from './messages';

const MessagesContainer = (props) => {
    let state = props.store.getState();

    let changeState = (text) => {
        props.store.dispatch(updateMessageTextActionCreator(text));
    }

    let sendMessage = () => {
        props.store.dispatch(sendMessageActionCreator());
    }

    return <Messages updateMessageText={changeState} sendMessage={sendMessage} messagesData={state.messagesPage.messagesData}/>
}

export default MessagesContainer;