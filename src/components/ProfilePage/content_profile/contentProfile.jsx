import React from 'react';
import ReactDOM from 'react-dom/client';
import AddpostContainer from './addpost/addpostContainer';
import Posts from './posts/posts';
import Profile from './profile/profile';

const ContentProfile = (props) => {
    return (
       <div className='content'>
            <Profile />
            <AddpostContainer store={props.store} />
            <Posts store={props.store} />
        </div> 
    )
    
}

export default ContentProfile;