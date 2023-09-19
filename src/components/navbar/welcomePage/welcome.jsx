import React from "react";
import s from "./welcome.module.css";

const Welcome = () => {
  return (
    <div className={s.wrap}>
      <div className={s.welcomeText}>
        <h1>HELLO EVERYONE!</h1>
        <p>WELCOME TO MY PROJECT.</p>
        <p>HERE YOU CAN SEE THE PROTOTYPE OF MY SOCIAL NETWORK.</p>
        <p>ENJOY!</p>
      </div>
    </div>
  );
};

export default Welcome;
