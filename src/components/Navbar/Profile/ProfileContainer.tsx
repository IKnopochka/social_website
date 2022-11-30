import React, {Component, ComponentType} from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {
    getProfileThunkCreator, getStatusThunkCreator,
    ProfilePropsType, updateStatusThunkCreator,
} from "../../../state/profilePageReducer";
import {RootReducerType} from "../../../state/redux-store";
import {Params, Navigate, useLocation, useNavigate, useParams} from "react-router-dom";
import {withAuthRedirect} from "../../../HOC/withAuthRedirect";
import {compose} from "redux";

export type ProfileMapStateToPropsType = {
    profile: ProfilePropsType
    status: string
}

type ProfileContainerPropsType = ProfileMapStateToPropsType & {
    getProfileThunkCreator: (paramsUserId: number) => void
    getStatusThunkCreator: (paramsUserId: number) => void
    updateStatusThunkCreator: (status: string) => void

}

class ProfileContainer extends React.Component<ProfileContainerPropsType & { params: Params }> {

    componentDidMount() {
        console.log(this)
        let userId = Number(this.props.params.userId)
        if (!userId) {
            userId = 26794
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

const mapStateToProps = (state: RootReducerType) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status
    }
}

function withRouter(Component: ComponentType<ProfileContainerPropsType & { params: Params }>) {

    function ComponentWithRouterProp(props: ProfileContainerPropsType) {
        return (
            <Component
                {...props}
                params={useParams()}
            />
        );
    }

    return ComponentWithRouterProp;
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