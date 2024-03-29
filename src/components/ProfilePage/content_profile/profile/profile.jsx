import React from "react";
import Preloader from "../../../../common/preloader/Preloader";
import s from "./profile.module.css";
import ProfileStatusWithHooks from './profileStatusWithHooks';

const Profile = (props) => {
  if (!props.profile) {
    // Render a loading state or return null
    return <Preloader />;
  }

  return (
    <div className={s.profile}>
      <div className={s.picture}></div>
      <div className={s.text}>
        <div className={s.name}>{props.profile.fullName}</div>
        <ProfileStatusWithHooks className={s.quote} status={props.status} updateStatus={props.updateStatus} />
        {/* <div className={s.quote}>SOME QUOTE</div> */}
      </div>
      {/* <div className={s.location}>Prague, CZ</div> */}
    </div>
  );
};

export default Profile;
