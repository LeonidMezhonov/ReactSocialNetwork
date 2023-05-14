import React from 'react';
import ReactDOM from 'react-dom/client';
import Contacts from './contacts/contacts';
import Messages from './messages/messages';
import s from './messages_block.module.css'

const MessagesPage = (props) => {
    return (
        <div className={s.wrap}>
            <div className={s.block}>
               <Contacts dialogData={props.state.dialogData}/> 
               <div className={s.vl}></div> 
               <Messages messagesData={props.state.messagesData}/>
            </div>
        </div>
    )
}

export default MessagesPage;