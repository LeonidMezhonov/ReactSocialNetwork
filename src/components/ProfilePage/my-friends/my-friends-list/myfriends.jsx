import React from 'react';
import s from './friends.module.css'

const MyFriends = () => {
    return (
        <div>
            <div className={s.qchat}>MY FRIENDS</div>
            <hr className={s.border}></hr>
        </div>
    )
}

export default MyFriends;