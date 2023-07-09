import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import ProfilePage from "./profilepage";

let AuthRedirectContainer = withAuthRedirect(ProfilePage);

export default AuthRedirectContainer;
