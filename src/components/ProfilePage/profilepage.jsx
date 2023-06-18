import React from 'react';
import QuickChat from './quick-chat/quick_chat';
import s from './profilepage.module.css'
import ContentProfileContainer from './content_profile/contentProfileContainer';

const ProfilePage = (props) => {
    return (
        <div className={s.wrap}>
            <ContentProfileContainer />
            <QuickChat />
        </div>
    )
}

export default ProfilePage;