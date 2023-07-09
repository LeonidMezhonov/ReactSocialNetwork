import React from "react";
import Logo from "./logo/logo";
import Navlinks from "./navlinks/navlinks";
import s from "./navbar.module.css";
import Welcome from "./welcomePage/welcome";

const Navbar = () => {
  return (
    <div className={s.wrap}>
      <div className={s.nav}>
        <Logo />
        <Navlinks />
      </div>
      <div>
        {/* <Welcome /> */}
      </div>
    </div>
  );
};

export default Navbar;
