import React from 'react';
import {connect} from "react-redux";
import {RootReducerType} from "../../state/redux-store";
import {
    follow,
    unfollow,
    AllUsersPropsType, toggleButtonInProcess, getUsersThunkCreator, followUserThunkCreator, unFollowUserThunkCreator
} from "../../state/usersReducer";
import Users from "./Users";
import Preloader from "../Preloader/Preloader";

export type UsersPagePropsType = AllUsersPropsType & MapToDispatchPropsType

export type MapToDispatchPropsType = {
    follow: (id: number) => void
    unfollow: (id: number) => void
    toggleButtonInProcess: (isProcessing: boolean, userId: number) => void
    getUsersThunkCreator: (page: number, pageSize: number) => void
    followUserThunkCreator: (id: number) => void
    unFollowUserThunkCreator: (id: number) => void
}

class UsersContainer extends React.Component<UsersPagePropsType> {

    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        this.props.getUsersThunkCreator(pageNumber, this.props.pageSize)
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}

            <Users onPageChanged={this.onPageChanged}
                {...this.props}
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
        isFetching: state.usersPage.isFetching,
        processingInProgress: state.usersPage.processingInProgress
    }
}

export default connect(mapStateToProps,
    {
        follow, unfollow, toggleButtonInProcess,
        getUsersThunkCreator,
        followUserThunkCreator,
        unFollowUserThunkCreator
    })
(UsersContainer)