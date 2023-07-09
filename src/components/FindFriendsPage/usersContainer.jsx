import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import Preloader from "../../common/preloader/Preloader";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import {
  follow,
  unfollow,
  toggleFollowingInProgress,
  getUsers,
} from "../../redux/users-reducer";
import Users from "./users";
import s from "./users.module.css";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }

  nextPage = (pageNumber) => {
    let pageNum = pageNumber + 1;
    this.props.getUsers(pageNum, this.props.pageSize);
  };

  previousPage = (pageNumber) => {
    let pageNum = pageNumber - 1;
    if (pageNum === 1) {
      return;
    }
    this.props.getUsers(pageNum, this.props.pageSize);
  };

  render() {
    return (
      <>
        {this.props.isFetching ? (
          <Preloader className={s.wrap} />
        ) : (
          <Users
            currentPage={this.props.currentPage}
            nextPage={this.nextPage}
            previousPage={this.previousPage}
            users={this.props.users}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
            followingInProgress={this.props.followingInProgress}
          />
        )}
      </>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    followingInProgress: state.usersPage.followingInProgress,
  };
};

export default compose(connect(mapStateToProps, {
    follow,
    unfollow,
    toggleFollowingInProgress,
    getUsers,
  }), withAuthRedirect)(UsersContainer)