import React from 'react';
import ReactDOM from 'react-dom/client';
import Contacts from './contacts/contacts';
import Messages from './messages/messages';
import s from './messages_block.module.css'

const MessagesPage = (props) => {
    return (
        <div className={s.wrap}>
            <div className={s.block}>
                <div className={s.dialogs}>
                   <Contacts dialogData={props.state.dialogData}/> 
                </div>
                <div className={s.messages}>
                   <Messages messagesData={props.state.messagesData}
                             dispatch={props.dispatch}
                             newMessage={props.state.newMessage}/> 
                </div>
            </div>
        </div>
    )
}

export default MessagesPage;