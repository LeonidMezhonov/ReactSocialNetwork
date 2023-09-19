import React from "react";
import s from "./auth.module.css";
import { NavLink } from "react-router-dom";

const LogIn = (props) => {
  return (
    <div className={s.loginBlock}>
      {props.isAuth ? (
        <div>
          {props.login} -{" "}
          <button onClick={props.logout} className={s.logout}>
            LogOut
          </button>
        </div>
      ) : (
        <NavLink to={"/login"}>LogIn</NavLink>
      )}
    </div>
  );
};

export default LogIn;
