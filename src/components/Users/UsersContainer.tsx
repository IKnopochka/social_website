import React from 'react';
import {connect} from "react-redux";


import Users from "./Users";
import Preloader from "../Preloader/Preloader";

import {compose} from "redux";
import {
    AllUsersPropsType, follow,
    followUserThunkCreator, getUsersThunkCreator,
    toggleButtonInProcess, unfollow,
    unFollowUserThunkCreator
} from "state/users-reducer";
import {getUsersSelectorFake} from "state/userSelectors";
import {AppRootStateType} from "state/redux-store";
import {withAuthRedirect} from "HOC/withAuthRedirect";


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
        console.log('user Cont comp did mount')
        this.props.getUsersThunkCreator(this.props.currentPage, this.props.itemsPerPage)
    }

    onPageChanged = (pageNumber: number) => {
        this.props.getUsersThunkCreator(pageNumber, this.props.itemsPerPage)
    }

    render() {
        console.log('user Cont render')
        return <>
            {this.props.isFetching ? <Preloader/> : null}

            <Users onPageChanged={this.onPageChanged}
                   {...this.props}
            />
        </>
    }
}


const mapStateToProps = (state: AppRootStateType): AllUsersPropsType => {
    console.log('MapStateTpProps USER container')
    return {
        users: getUsersSelectorFake(state),
        itemsPerPage: state.usersPage.itemsPerPage,
        totalItemsCount: state.usersPage.totalItemsCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        processingInProgress: state.usersPage.processingInProgress,
        pagesPerPortion: state.usersPage.pagesPerPortion
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
