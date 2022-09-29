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
import User from "./User";

export type MapToDispatchPropsType = {
    follow: (id: number) => void
    unfollow: (id: number) => void
    setUsers: (users: Array<UserPropsType>) => void
    setCurrentPage: (currentPageNumber: number) => void
    setTotalCount: (totalUsers: number) => void
}

const mapStateToProps= (state: RootReducerType): AllUsersPropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapToDispatchPropsType => {
    return {
        follow: (userID) => {dispatch(followAC(userID))},
        unfollow: (userID) => {dispatch(unfollowAC(userID))},
        setUsers: (users) => {dispatch(setUsersAC(users))},
        setCurrentPage: (currentPageNumber) => {dispatch(setCurrentPageAC(currentPageNumber))},
        setTotalCount: (totalUsers) => {dispatch(setTotalCountAC(totalUsers))}
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(User)

export default UsersContainer;