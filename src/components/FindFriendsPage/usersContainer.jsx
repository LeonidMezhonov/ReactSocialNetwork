import React from 'react';
import { connect } from 'react-redux';
import { getUsers } from '../../api/api';
import Preloader from '../../common/preloader/Preloader';
import { follow, setCurrentPage, setUsers, unfollow, setTotalUsersCount, toggleIsFetching } from '../../redux/users-reducer';
import Users from './users';

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true);
        getUsers(this.props.currentPage, this.props.pageSize).then(data => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(data.items);
            });
    }

    nextPage = (pageNumber) => {
        let pageNum = pageNumber + 1;
        this.props.toggleIsFetching(true);
        this.props.setCurrentPage(pageNum);
        getUsers(pageNum, this.props.pageSize).then(data => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(data.items);
            });
    }

    previousPage = (pageNumber) => {
        let pageNum = pageNumber - 1;
        if(pageNum === 1) {
            return;
        }
        this.props.toggleIsFetching(true);
        this.props.setCurrentPage(pageNum);
        getUsers(pageNum, this.props.pageSize).then(data => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(data.items);
            });
    }

    render() {
        return <>
            { this.props.isFetching ? <Preloader /> : null }
            <Users currentPage={this.props.currentPage}
                    nextPage={this.nextPage}
                    previousPage={this.previousPage}
                    users={this.props.users}
                    follow={this.props.follow}
                    unfollow={this.props.unfollow}
            />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
    }
}

export default connect(mapStateToProps, 
    {
        follow, unfollow, setUsers,
        setCurrentPage, setTotalUsersCount, toggleIsFetching,
    }) (UsersContainer);