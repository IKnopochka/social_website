import React, {Component, ComponentType} from "react";
import Profile from "s2-features/f2-profile/Profile";
import {connect} from "react-redux";
import {
    getProfileThunkCreator, getStatusThunkCreator, updateStatusThunkCreator,
} from "s1-main/m2-bll/profile-reducer";
import {AppRootStateType} from "s1-main/m3-dal/store";
import {Params} from "react-router-dom";
import {withAuthRedirect} from "s1-main/m1-ui/HOCs/withAuthRedirect";
import {compose} from "redux";
import {withRouter} from "s1-main/m1-ui/HOCs/withRouter";
import {ProfileType} from "s1-main/m3-dal/profileAPI";

export type ProfileMapStateToPropsType = {
    profile: ProfileType
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

    refreshProfile() {
        let userId = Number(this.props.params.userId)
        if (!userId) {
            userId = this.props.loggedUserId
        }
        this.props.getProfileThunkCreator(userId)
        this.props.getStatusThunkCreator(userId)
    }

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps: Readonly<ProfileContainerPropsType & { params: Params }>, prevState: Readonly<{}>) {
        if(prevProps.profile?.userId !== this.props.profile?.userId) this.refreshProfile()
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