import { connect } from 'react-redux';
import { sendMessage, updateMessageText } from '../../../redux/dialogs-reducer';
import Messages from './messages';

let mapStateToProps = (state) => {
    return {
        messagesData: state.messagesPage.messagesData,
    }
}

const MessagesContainer = connect(mapStateToProps, { sendMessage,updateMessageText, }) (Messages);

export default MessagesContainer;