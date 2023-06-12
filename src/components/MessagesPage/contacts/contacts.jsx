import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './contacts.module.css'

const ContactItem = (props) => {
    let path = '/messages/' + props.id;
    return (
        <div className={s.item}>
            <NavLink to={path} className = { navData => navData.isActive ? s.active : s.item }>{props.name}</NavLink>
        </div>
    )
}

const Contacts = (props) => {
    let dialogElements = props.dialogData
        .map ( d => <ContactItem name={d.name} id={d.id}/>);

    return (
        <div className={s.dialogs}>
            {dialogElements}
        </div>
    )
}

export default Contacts;