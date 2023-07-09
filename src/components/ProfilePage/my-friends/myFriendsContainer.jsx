import React from 'react';
import MyFriends from './my-friends-list/myfriends';
import s from './myFriendsContainer.module.css'

const MyFriendsContainer = () => {
    return (
        <div>
            <div className={s.chat}>
                <MyFriends />
            </div> 
        </div>
        
    )
}

export default MyFriendsContainer;