import React from 'react';
import ReactDOM from 'react-dom/client';
import ContentProfile from './content_profile/contentProfile';
import QuickChat from './quick-chat/quick_chat';
import s from './profilepage.module.css'

const ProfilePage = (props) => {
    return (
        <div className={s.wrap}>
            <ContentProfile state={props.state} addPost={props.addPost} updatePost={props.updatePost}/>
            <QuickChat />
        </div>
    )
}

export default ProfilePage;