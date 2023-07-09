import React from "react";
import s from "./users.module.css";
import userphoto from "../../Assets/images/user.png";
import { NavLink } from "react-router-dom";

let Users = (props) => {
  return (
    <div className={s.wrap}>
      {props.users.map((u) => (
        <div key={u.id}>
          <div className={s.user}>
            <div>
              {u.followed ? (
                <button
                  disabled={props.followingInProgress.some((id) => id === u.id)}
                  className={s.btnUnfollow}
                  onClick={() => {
                    props.unfollow(u.id);
                  }}
                >
                  FOLLOWED
                </button>
              ) : (
                <button
                  disabled={props.followingInProgress.some((id) => id === u.id)}
                  className={s.btnFollow}
                  onClick={() => {
                    props.follow(u.id);
                  }}
                >
                  FOLLOW
                </button>
              )}
            </div>
            <NavLink to={"/profile/" + u.id}>
              <div className={s.userInfo}>
                <div className={s.picture}>
                  <img
                    src={u.photos.small != null ? u.photos.small : userphoto}
                    alt=""
                  />
                </div>

                <div className={s.text}>
                  <div className={s.name}>{u.name}</div>
                  <div className={s.quote}>{u.status}</div>
                </div>

                {/* <div className={s.location}>'u.location'</div> */}
              </div>
            </NavLink>
          </div>
        </div>
      ))}

      <div className={s.pages}>
        <div
          className={s.selectedPage}
          onClick={(e) => {
            props.previousPage(props.currentPage);
          }}
        >
          PREVIOUS PAGE
        </div>
        <div
          className={s.selectedPage}
          onClick={(e) => {
            props.nextPage(props.currentPage);
          }}
        >
          NEXT PAGE
        </div>
      </div>
    </div>
  );
};

export default Users;
