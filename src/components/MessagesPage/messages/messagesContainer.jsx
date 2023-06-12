import { connect } from 'react-redux';
import { sendMessageActionCreator, updateMessageTextActionCreator } from '../../../redux/dialogs-reducer';
import Messages from './messages';

let mapStateToProps = (state) => {
    return {
        messagesData: state.messagesPage.messagesData,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: () => {dispatch(sendMessageActionCreator())},
        updateMessageText: (text) => {dispatch(updateMessageTextActionCreator(text))},
    }
}

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps) (Messages);

export default MessagesContainer;