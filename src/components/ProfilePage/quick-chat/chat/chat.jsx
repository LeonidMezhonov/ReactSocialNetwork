import React from 'react';
import ReactDOM from 'react-dom/client';
import s from './chat.module.css'

const Chat = () => {
    return (
        <div>
            <div className={s.qchat}>QUICK CHAT</div>
            <hr className={s.border}></hr>
        </div>
    )
}

export default Chat;