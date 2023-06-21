import React from 'react';
import LogInContainer from './auth/authContainer';
import Chat from './chat/chat';
import s from './quick_chat.module.css'

const QuickChat = () => {
    return (
        <div>
            <div className={s.loginWrap}>
                <LogInContainer />
            </div>
            <div className={s.chat}>
                <Chat />
            </div> 
        </div>
        
    )
}

export default QuickChat;