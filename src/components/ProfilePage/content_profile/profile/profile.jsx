import React from 'react';
import ReactDOM from 'react-dom/client';
import s from './profile.module.css'

const Profile = () => {
    return (
        <div className={s.profile}>
            <div className={s.picture}></div>
            <div className={s.text}>
                <div className={s.name}>LEONID MEZHONOV</div>
                <div className={s.quote}>SOME QUOTE</div>
            </div>
            <div className={s.location}>Prague, CZ</div>
        </div>
    )
}

export default Profile;