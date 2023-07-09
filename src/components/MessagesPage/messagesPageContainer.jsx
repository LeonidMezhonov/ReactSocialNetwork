import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import MessagesPage from "./messagesPage";

let AuthRedirectContainer = withAuthRedirect(MessagesPage);

export default AuthRedirectContainer;
