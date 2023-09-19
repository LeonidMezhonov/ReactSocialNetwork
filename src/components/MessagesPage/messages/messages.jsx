import React from "react";
import s from "./messages.module.css";
import { Formik, Form, Field } from "formik";

const MessageItem = (props) => {
  return <div className={s.message}>{props.message}</div>;
};

const SendMessageForm = (props) => {
  const submit = (values, { setSubmitting }) => {
    props.sendMessage(values.newMessage);
    setSubmitting(false);
  };

  return (
    <Formik initialValues={{ newMessage: "" }} onSubmit={submit}>
      {({ isSubmitting }) => (
        <Form className={s.form}>
          <Field
            className={s.messageArea}
            type="newMessage"
            name="newMessage"
          />
          <button className={s.sendBtn} type="submit" disabled={isSubmitting}>
            Send
          </button>
        </Form>
      )}
    </Formik>
  );
};

const Messages = (props) => {
  let sendMessage = (newMessage) => {
    props.sendMessage(newMessage);
  };

  let messageElements = props.messagesData.map((m) => (
    <MessageItem message={m.message} />
  ));

  return (
    <div className={s.messagesWrap}>
      <div className={s.messages}>
        <div className={s.messageBlock}>{messageElements}</div>
      </div>
      <div className={s.footer}>
        <SendMessageForm sendMessage={sendMessage} />
      </div>
    </div>
  );
};

export default Messages;
