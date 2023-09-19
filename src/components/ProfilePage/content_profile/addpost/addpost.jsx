import React from "react";
import s from "./addpost.module.css";
import { Formik, Form, Field } from "formik";

const AddPostForm = (props) => {
  const submit = (values, { setSubmitting }) => {
    props.addPost(values.newPost);
    setSubmitting(false);
  };

  return (
    <Formik initialValues={{ newPost: "" }} onSubmit={submit}>
      {({ isSubmitting }) => (
        <Form className={s.form}>
          <Field className={s.postarea} type="newPost" name="newPost" />
          <div className={s.btnwrap}>
            <button
              className={s.addbutton}
              type="submit"
              disabled={isSubmitting}
            >
              Send
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

const Addpost = (props) => {
  let addPost = (newPost) => {
    props.addPost(newPost);
  };

  return (
    <div className={s.textarea}>
      <AddPostForm addPost={addPost} />
    </div>
  );
};

export default Addpost;
