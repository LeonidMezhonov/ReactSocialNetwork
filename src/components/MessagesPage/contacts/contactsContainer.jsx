import React from 'react';
import { connect } from 'react-redux';
import Contacts from './contacts';

let mapStateToProps = (state) => {
    return {
        dialogData: state.messagesPage.dialogData,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {}
}

const ContactsContainer = connect(mapStateToProps, mapDispatchToProps) (Contacts);

export default ContactsContainer;