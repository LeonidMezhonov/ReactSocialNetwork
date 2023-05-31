import React from 'react';
import ReactDOM from 'react-dom/client';
import s from './posts.module.css'

const PostItem = (props) => {
    return (
        <div className={s.post}>
            <div className={s.pic}></div>
            <div className={s.text}>{props.text}</div>
        </div>
    )
} 

const Posts = (props) => {
    let state = props.store.getState();
    let postsData = state.profilePage.postsData;
    let postElements = postsData
        .map ( p => <PostItem text={p.post}/>);

    return (
        <div className={s.posts}>
            {postElements}
        </div>
    )
}

export default Posts;