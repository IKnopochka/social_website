import React from 'react';
import {connect} from "react-redux";
import {RootReducerType} from "../../state/redux-store";
import {
    follow,
    setCurrentPage,
    toggleIsFetching,
    setTotalCount,
    setUsers,
    unfollow,
    UserPropsType, AllUsersPropsType, toggleButtonInProcess
} from "../../state/usersReducer";
import {usersAPI} from "../../API/API";
import Users from "./Users";
import Preloader from "../Preloader/Preloader";

type UsersPagePropsType = AllUsersPropsType & MapToDispatchPropsType

export type MapToDispatchPropsType = {
    follow: (id: number) => void
    unfollow: (id: number) => void
    setUsers: (users: Array<UserPropsType>) => void
    setCurrentPage: (currentPageNumber: number) => void
    setTotalCount: (totalUsers: number) => void
    toggleIsFetching: (isFetching: boolean) => void
    toggleButtonInProcess: (isProcessing: boolean, userId: number) => void
}

class UsersContainer extends React.Component<UsersPagePropsType> {

    componentDidMount() {
        this.props.toggleIsFetching(true)
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(data.items)
            this.props.setTotalCount(data.totalCount)
        });
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        this.props.toggleIsFetching(true)
        usersAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(data.items)
        });

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
    {follow, unfollow, setUsers, setCurrentPage, setTotalCount, toggleIsFetching, toggleButtonInProcess})
(UsersContainer)