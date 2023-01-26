import React from 'react';
import {connect} from "react-redux";
import {AppRootStateType} from "../../state/redux-store";
import {
    follow,
    unfollow,
    AllUsersPropsType, toggleButtonInProcess, getUsersThunkCreator, followUserThunkCreator, unFollowUserThunkCreator
} from "../../state/usersReducer";
import Users from "./Users";
import Preloader from "../Preloader/Preloader";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";
import {compose} from "redux";

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


const mapStateToProps = (state: AppRootStateType): AllUsersPropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        processingInProgress: state.usersPage.processingInProgress
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps,
        {
            follow, unfollow, toggleButtonInProcess,
            getUsersThunkCreator,
            followUserThunkCreator,
            unFollowUserThunkCreator
        }),
    withAuthRedirect)(UsersContainer)
