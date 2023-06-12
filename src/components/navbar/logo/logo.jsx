import React from 'react';
import s from './logo.module.css'

const Logo = () => {
    return (
        <div>
            <div className={s.logo}></div>
            <hr className={s.border}></hr>
        </div>
    )
}

export default Logo;