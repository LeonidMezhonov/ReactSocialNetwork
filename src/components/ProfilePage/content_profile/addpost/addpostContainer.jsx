import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../../redux/profile-reducer';
import Addpost from './addpost';

const AddpostContainer = (props) => {
    let state = props.store.getState();
    let addPost = () => {
        props.store.dispatch(addPostActionCreator());
    }

    let onPostChange = (text) => {
        props.store.dispatch(updateNewPostTextActionCreator(text));
    }
 
    return <Addpost addPost={addPost} updateNewPostText={onPostChange} newPostText={state.profilePage.newPostText}/>;
}

export default AddpostContainer;