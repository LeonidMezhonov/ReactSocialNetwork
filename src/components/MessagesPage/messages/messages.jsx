import React from 'react';
import ReactDOM from 'react-dom/client';
import s from './messages.module.css'

const MessageItem = (props) => {
    return (
        <div className={s.message}>
            {props.message}
        </div>
    )
}

const Messages = (props) => {
    let messageElements = props.messagesData
        .map ( m => <MessageItem message={m.message}/>);

    return (
        <div className={s.messages}>
            {messageElements}
        </div>
    )
}

export default Messages;