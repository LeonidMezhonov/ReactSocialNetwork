import React from 'react';
import Logo from './logo/logo';
import Navlinks from './navlinks/navlinks';
import s from './navbar.module.css'

const Navbar = () => {
    return (
        <div className={s.nav}>
            <Logo />
            <Navlinks /> 
        </div>
    )
};

export default Navbar;