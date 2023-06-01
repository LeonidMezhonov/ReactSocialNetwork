import React from 'react';
import { connect } from 'react-redux';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../../redux/profile-reducer';
import Addpost from './addpost';

let mapStateToProps = (state) => {
    return {
        newPostText: state.profilePage.newPostText,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {dispatch(addPostActionCreator())},
        updateNewPostText: (text) => {dispatch(updateNewPostTextActionCreator(text))},
    }
}

const AddpostContainer = connect(mapStateToProps, mapDispatchToProps) (Addpost);

export default AddpostContainer;