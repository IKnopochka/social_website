import React from 'react';
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {RootReducerType} from "../../state/redux-store";
import {
    AllUsersPropsType,
    followAC,
    setCurrentPageAC, setTotalCountAC,
    setUsersAC,
    unfollowAC,
    UserPropsType
} from "../../state/usersReducer";
import {usersAPI} from "../../API/API";
import Users from "./Users";
import preloaderPic from '../../images/Spin-1s-200px.svg'

type UsersPagePropsType = AllUsersPropsType & MapToDispatchPropsType
export type MapToDispatchPropsType = {
    follow: (id: number) => void
    unfollow: (id: number) => void
    setUsers: (users: Array<UserPropsType>) => void
    setCurrentPage: (currentPageNumber: number) => void
    setTotalCount: (totalUsers: number) => void
}

class UsersContainer extends React.Component<UsersPagePropsType> {

    componentDidMount() {
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(response => {
            this.props.setUsers(response.data.items)
            this.props.setTotalCount(response.data.totalCount)
        });
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        usersAPI.getUsers(pageNumber, this.props.pageSize).then(response => {
            this.props.setUsers(response.data.items)
        });

    }

    render() {
        return <>
            {this.props.isFetching ? <img src={preloaderPic} /> : null}
            <Users onPageChanged={this.onPageChanged}
                   users={this.props.users}
                   pageSize={this.props.pageSize}
                   totalUsersCount={this.props.totalUsersCount}
                   currentPage={this.props.currentPage}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   isFetching={this.props.isFetching}

            />
        </>
    }
}


const mapStateToProps = (state: RootReducerType): AllUsersPropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapToDispatchPropsType => {
    return {
        follow: (userID) => {
            dispatch(followAC(userID))
        },
        unfollow: (userID) => {
            dispatch(unfollowAC(userID))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (currentPageNumber) => {
            dispatch(setCurrentPageAC(currentPageNumber))
        },
        setTotalCount: (totalUsers) => {
            dispatch(setTotalCountAC(totalUsers))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)