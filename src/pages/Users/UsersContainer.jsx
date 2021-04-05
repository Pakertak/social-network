import React from 'react';
import { connect } from 'react-redux';
import {
    // ACTIONS
    setCurrentPage,
    setUsers,
    toggleFollowingProgress, 
    // THUNKS
    getUsers, follow, unfollow
} from '../../redux/reducers/users-reducer';
import Users from './Users';
import Preloader from '../../components/Preloader/Preloader';

class UsersContainer extends React.Component {

    componentDidMount = () => {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    };

    onPageChanged = (currentPage) => {
        this.props.setCurrentPage(currentPage);
        this.props.getUsers(currentPage, this.props.pageSize);
    }

    render() {
        return (
            <>
                {
                    this.props.isFetching
                        ? <Preloader />
                        :
                        <Users
                            users={this.props.users}
                            totalUsersCount={this.props.totalUsersCount}
                            pageSize={this.props.pageSize}
                            currentPage={this.props.currentPage}
                            followingInProgress={this.props.followingInProgress}
                            follow={this.props.follow}
                            unfollow={this.props.unfollow}
                            onPageChanged={this.onPageChanged}
                        />
                }
            </>
        );
    };
}


const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    };
};


export default connect(mapStateToProps, {
    setUsers,
    setCurrentPage,
    toggleFollowingProgress,
    getUsers,
    follow,
    unfollow
})(UsersContainer);


// const mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (userId) => {
//             dispatch(follow(userId));
//         },
//         unfollow: (userId) => {
//             dispatch(unfollow(userId));
//         },
//         setUsers: (users) => {
//             dispatch(setUsers(users));
//         },
//         setCurrentPage: (pageNumber) => {
//             dispatch(setCurrentPage(pageNumber));
//         },
//         setTotalUsersCount: (totalUsersCount) => {
//             dispatch(setTotalUsersCount(totalUsersCount));
//         },
//         toggleIsFetching: (isFetching) => {
//             dispatch(toggleIsFetching(isFetching));
//         }
//     }
// };