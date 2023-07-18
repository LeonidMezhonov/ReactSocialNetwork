import React, { useEffect } from "react";
import ContentProfile from "./contentProfile";
import { connect } from "react-redux";
import { getUserProfile, getStatus, updateStatus } from "../../../redux/profile-reducer";
import { useParams } from "react-router-dom";

function ContentProfileContainer(props) {
  let { userId } = useParams();
  if (!userId) {
    userId = 29270;
  }
  useEffect(() => {
    props.getUserProfile(userId);
    props.getStatus(userId);
    // eslint-disable-next-line
  }, [userId]);
  return (
    <div>
      <ContentProfile profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
    </div>
  );
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
});

export default connect(mapStateToProps, { getUserProfile, getStatus, updateStatus })(ContentProfileContainer);
