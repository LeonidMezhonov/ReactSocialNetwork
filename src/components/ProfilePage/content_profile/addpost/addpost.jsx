import React from 'react';
import ReactDOM from 'react-dom/client';
import s from './addpost.module.css'

const Addpost = (props) => {
    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value;
        props.addPost(text);
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updatePost(text);
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