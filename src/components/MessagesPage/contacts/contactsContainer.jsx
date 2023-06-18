import { connect } from 'react-redux';
import Contacts from './contacts';

let mapStateToProps = (state) => {
    return {
        dialogData: state.messagesPage.dialogData,
    }
}

const ContactsContainer = connect(mapStateToProps, {}) (Contacts);

export default ContactsContainer;