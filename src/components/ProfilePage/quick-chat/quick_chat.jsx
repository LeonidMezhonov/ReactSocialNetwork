import React from 'react';
import ReactDOM from 'react-dom/client';
import Chat from './chat/chat';
import s from './quick_chat.module.css'

const QuickChat = () => {
    return (
        <div className={s.chat}>
            <Chat />
        </div>
    )
}

export default QuickChat;