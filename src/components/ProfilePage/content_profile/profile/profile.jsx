import React from 'react';
import s from './profile.module.css'

const Profile = (props) => {
    return (
        <div className={s.profile}>
            <div className={s.picture}></div>
            <div className={s.text}>
                <div className={s.name}>{props.profile.fullName}</div>
                <div className={s.quote}>SOME QUOTE</div>
            </div>
            <div className={s.location}>Prague, CZ</div>
        </div>
    )
}

export default Profile;