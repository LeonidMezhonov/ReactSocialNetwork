import React from "react";
import { connect } from "react-redux";
import { getAuthUserData } from "../../../redux/auth-reducer";
import LogIn from "./auth";
import s from "./auth.module.css";
import { logout } from "../../../redux/auth-reducer";

class LogInContainer extends React.Component {
  componentDidMount() {
    this.props.getAuthUserData();
  }

  render() {
    return (
      <div className={s.loginCenter}>
        <div className={s.loginWrap}>
          <LogIn {...this.props} />
        </div>
      </div>
    );
  }
}

let mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
});

export default connect(mapStateToProps, { getAuthUserData, logout })(LogInContainer);
