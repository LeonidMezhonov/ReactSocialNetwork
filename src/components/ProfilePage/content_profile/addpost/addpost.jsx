import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../../redux/state';
import s from './addpost.module.css'

const Addpost = (props) => {
    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch(addPostActionCreator());
        newPostElement.current.value = '';
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.dispatch(updateNewPostTextActionCreator(text));
    }
 
    return (
        <div className={s.textarea}>
            <textarea placeholder="Add some text" className={s.postarea} name="post" ref={newPostElement} onChange={ onPostChange }></textarea>
            <div className={s.btnwrap}>
                <button className={s.addbutton} onClick={ addPost }>ADD POST</button>
            </div>
        </div>
    )
}

export default Addpost;

// placeholder="Add some text"
// value={props.newPostText}