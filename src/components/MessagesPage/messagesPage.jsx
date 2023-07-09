import React from "react";
import { Navigate } from "react-router";
import ContactsContainer from "./contacts/contactsContainer";
import MessagesContainer from "./messages/messagesContainer";
import s from "./messages_block.module.css";

const MessagesPage = (props) => {
  return (
    <div className={s.wrap}>
      <div className={s.block}>
        <div className={s.dialogs}>
          <ContactsContainer />
        </div>
        <div className={s.messages}>
          <MessagesContainer />
        </div>
      </div>
    </div>
  );
};

export default MessagesPage;
