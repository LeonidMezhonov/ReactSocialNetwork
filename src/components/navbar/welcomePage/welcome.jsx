import React from "react";
import s from "./welcome.module.css";

const Welcome = () => {
  return (
    <div className={s.wrap}>
      <div className={s.welcomeText}>
        <h1>Hello everyone!</h1>
        <p>Welcome to my project.</p>
        <p>Here you can see the prototype of my social network.</p>
        <p>Enjoy!</p>
      </div>
    </div>
  );
};

export default Welcome;
