import React from "react";
import MyFriendsContainer from "./my-friends/myFriendsContainer";
import s from "./profilepage.module.css";
import ContentProfileContainer from "./content_profile/contentProfileContainer";

const ProfilePage = (props) => {
  return (
    <div className={s.wrap}>
      <ContentProfileContainer />
      <MyFriendsContainer />
    </div>
  );
};

export default ProfilePage;
