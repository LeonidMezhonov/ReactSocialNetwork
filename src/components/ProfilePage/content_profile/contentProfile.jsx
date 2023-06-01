import React from 'react';
import ReactDOM from 'react-dom/client';
import AddpostContainer from './addpost/addpostContainer';
import Posts from './posts/posts';
import PostsContainer from './posts/postsContainer';
import Profile from './profile/profile';

const ContentProfile = (props) => {
    return (
       <div className='content'>
            <Profile />
            <AddpostContainer />
            <PostsContainer />
        </div> 
    )   
}

export default ContentProfile;