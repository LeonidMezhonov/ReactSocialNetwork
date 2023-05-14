import React from 'react';
import ReactDOM from 'react-dom/client';
import { NavLink } from 'react-router-dom';
import s from './navlinks.module.css'

const Navlinks = () => {
    return (
        <div>
            <nav>
                <div className={s.item}>
                    <NavLink to="/profile" className = { navData => navData.isActive ? s.active : s.item }>PROFILE</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/messages" className = { navData => navData.isActive ? s.active : s.item }>MESSAGES</NavLink> 
                </div>
                <div className={s.item}>
                    <NavLink to="#">NEWS</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="#">MUSIC</NavLink>
                </div>
                <div className={s.item}>
                    <div className={s.settings}>
                        <NavLink to="#">SETTINGS</NavLink>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navlinks;