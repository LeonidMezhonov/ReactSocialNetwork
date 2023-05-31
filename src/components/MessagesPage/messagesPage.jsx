import React from 'react';
import ReactDOM from 'react-dom/client';
import Contacts from './contacts/contacts';
import MessagesContainer from './messages/messagesContainer';
import s from './messages_block.module.css'

const MessagesPage = (props) => {
    return (
        <div className={s.wrap}>
            <div className={s.block}>
                <div className={s.dialogs}>
                   <Contacts dialogData={props.state.dialogData}/> 
                </div>
                <div className={s.messages}>
                   <MessagesContainer store={props.store}/> 
                </div>
            </div>
        </div>
    )
}

export default MessagesPage;