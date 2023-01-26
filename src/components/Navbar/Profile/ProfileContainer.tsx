import React, {Component, ComponentType} from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {
    getProfileThunkCreator, getStatusThunkCreator,
    ProfilePropsType, updateStatusThunkCreator,
} from "../../../state/profilePageReducer";
import {AppRootStateType} from "../../../state/redux-store";
import {Params} from "react-router-dom";
import {withAuthRedirect} from "../../../HOC/withAuthRedirect";
import {compose} from "redux";
import {withRouter} from "../../../HOC/withRouter";

export type ProfileMapStateToPropsType = {
    profile: ProfilePropsType
    status: string
    loggedUserId: number
    isAuth: boolean
}

type ProfileContainerPropsType = ProfileMapStateToPropsType & {
    getProfileThunkCreator: (paramsUserId: number) => void
    getStatusThunkCreator: (paramsUserId: number) => void
    updateStatusThunkCreator: (status: string) => void

}

class ProfileContainer extends React.Component<ProfileContainerPropsType & { params: Params }> {

    componentDidMount() {
        let userId = Number(this.props.params.userId)
        if (!userId) {
            userId = this.props.loggedUserId
        }
        this.props.getProfileThunkCreator(userId)
        this.props.getStatusThunkCreator(userId)
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatusThunkCreator}/>
        )
    }
}

const mapStateToProps = (state: AppRootStateType) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        loggedUserId: state.auth.id,
        isAuth: state.auth.isAuth
    }
}

export default compose<React.ComponentType>(
    withAuthRedirect,
    connect(mapStateToProps, {
        getProfileThunkCreator,
        getStatusThunkCreator,
        updateStatusThunkCreator
    }),
    withRouter
    )
(ProfileContainer)

//export default withAuthRedirect(connect(mapStateToProps, {getProfileThunkCreator})(withRouter(ProfileContainer)));