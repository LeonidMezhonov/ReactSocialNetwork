import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import s from "./login.module.css";
import { connect } from "react-redux";
import { login } from "../../redux/auth-reducer";
import { Navigate } from "react-router-dom";

const LoginForm = (props) => {
  const validate = (values) => {
    const errors = {};
    if (!values.email) {
      errors.email = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "Invalid email address";
    }
    return errors;
  };

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validate={validate}
      onSubmit={props.submit}
    >
      {({ isSubmitting }) => (
        <Form className={s.form}>
          <Field
            className={s.input}
            type="email"
            name="email"
            placeholder="Email"
          />
          <ErrorMessage name="email" component="div" />
          <Field
            className={s.input}
            type="password"
            name="password"
            placeholder="Password"
          />
          <ErrorMessage name="password" component="div" />
          <div>
            <Field type="checkbox" name="rememberMe" /> remember me
          </div>
          <button className={s.btn} type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};

const Login = (props) => {
  const submit = (values, { setSubmitting }) => {
    props.login(values.email, values.password, values.rememberMe)
  };

  if (props.isAuth) {
    return <Navigate to="/profile" />;
  }

  return (
    <div className={s.wrap}>
      <div className={s.form}>
        <h1>Log In</h1>
        <LoginForm submit={submit}/>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, { login })(Login);
