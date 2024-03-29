import React from 'react';
import {connect} from "react-redux";
import Box from "@mui/material/Box";
import Users from "s2-features/f7-users/Users";
import Preloader from "s1-main/m1-ui/common/preloader/Preloader";
import {compose} from "redux";
import {
    AllUsersPropsType, follow,
    followUserThunkCreator, getUsersThunkCreator,
    toggleButtonInProcess, unfollow,
    unFollowUserThunkCreator
} from "s1-main/m2-bll/users-reducer";
import {getUsersSelectorFake} from "s1-main/m1-ui/common/selectors/selectors";
import {AppRootStateType} from "s1-main/m3-dal/store";
import {withAuthRedirect} from "s1-main/m1-ui/HOCs/withAuthRedirect";


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
        this.props.getUsersThunkCreator(this.props.currentPage, this.props.itemsPerPage)
    }

    onPageChanged = (pageNumber: number) => {
        this.props.getUsersThunkCreator(pageNumber, this.props.itemsPerPage)
    }

    render() {
        return <>
            {this.props.isFetching
                ? <Preloader/>
                : <Box
                    sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        flexDirection: 'column',
                        flexGrow: '1',
                        '& > :not(style)': {

                        },
                    }}
                >
                    <Users onPageChanged={this.onPageChanged}
                           {...this.props}
                    />
                </Box>
            }




        </>
    }
}


const mapStateToProps = (state: AppRootStateType): AllUsersPropsType => {
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
