import { connect } from "react-redux";
import { sendMessage } from "../../../redux/dialogs-reducer";
import Messages from "./messages";

let mapStateToProps = (state) => {
  return {
    messagesData: state.messagesPage.messagesData,
  };
};

const MessagesContainer = connect(mapStateToProps, {
  sendMessage,
})(Messages);

export default MessagesContainer;
