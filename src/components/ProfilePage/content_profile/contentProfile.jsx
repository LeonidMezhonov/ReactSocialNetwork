import React from 'react';
import AddpostContainer from './addpost/addpostContainer';
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