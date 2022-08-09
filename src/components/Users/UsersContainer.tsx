import React from 'react';
import Users from "./Users";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {RootReducerType} from "../../state/redux-store";
import {AllUsersPropsType, followAC, setUsersAC, unfollowAC, UserPropsType} from "../../state/usersReducer";

export type MapToDispatchPropsType = {
    follow: (id: number) => void
    unfollow: (id: number) => void
    setUsers: (users: Array<UserPropsType>) => void
}

const mapStateToProps= (state: RootReducerType): AllUsersPropsType => {
    return {
        users: state.usersPage.users
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapToDispatchPropsType => {
    return {
        follow: (userID) => {dispatch(followAC(userID))},
        unfollow: (userID) => {dispatch(unfollowAC(userID))},
        setUsers: (users) => {dispatch(setUsersAC(users))}
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer;