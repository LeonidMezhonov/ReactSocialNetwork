import React, { useEffect } from "react";
import ContentProfile from "./contentProfile";
import { connect } from "react-redux";
import { getUserProfile } from "../../../redux/profile-reducer";
import { useParams } from "react-router-dom";

function ContentProfileContainer(props) {
  let { userId } = useParams();
  if (!userId) {
    userId = 29270;
  }
  useEffect(() => {
    props.getUserProfile(userId);
    // eslint-disable-next-line
  }, [userId]);
  return (
    <div>
      <ContentProfile profile={props.profile} />
    </div>
  );
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
});

export default connect(mapStateToProps, { getUserProfile })(
  ContentProfileContainer
);
