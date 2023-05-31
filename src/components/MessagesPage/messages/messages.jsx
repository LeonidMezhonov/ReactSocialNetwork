import React from 'react';
import s from './messages.module.css'

const MessageItem = (props) => {
    return (
        <div className={s.message}>
            {props.message}
        </div>
    )
}

const Messages = (props) => {
    let newMessageText = React.createRef();

    let changeState = () => {
        let text = newMessageText.current.value; 
        props.updateMessageText(text);
    }

    let sendMessage = () => {
        props.sendMessage();
        newMessageText.current.value = '';
    }

    let messageElements = props.messagesData
        .map ( m => <MessageItem message={m.message}/>);

    return (
        <div className={s.messagesWrap}>
            <div className={s.messages}>
                <div className={s.messageBlock}>
                    {messageElements}
                </div>
            </div>
            <div className={s.footer}>
                <textarea className={s.messageArea} ref={ newMessageText } onChange={ changeState }></textarea>
                <button className={s.sendBtn} onClick={ sendMessage }>Send</button>
            </div>
        </div>
        
    )
}

export default Messages;