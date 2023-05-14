import React from 'react';
import ReactDOM from 'react-dom/client';
import Addpost from './addpost/addpost';
import Posts from './posts/posts';
import Profile from './profile/profile';

const ContentProfile = (props) => {
    return (
       <div className='content'>
            <Profile />
            <Addpost addPost={props.addPost} updatePost={props.updatePost} newPostText={props.state.newPostText}/>
            <Posts postsData={props.state.postsData} />
        </div> 
    )
    
}

export default ContentProfile;