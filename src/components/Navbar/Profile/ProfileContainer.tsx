import React, {Component, ComponentType} from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {
    getProfileThunkCreator,
    ProfileMapStateToPropsType,
    ProfilePropsType,
    setUserProfile
} from "../../../state/profilePageReducer";
import {RootReducerType} from "../../../state/redux-store";
import {Params, useLocation, useNavigate, useParams} from "react-router-dom";

type ProfileContainerPropsType = ProfileMapStateToPropsType & {
    setUserProfile: (data: ProfilePropsType) => void
    getProfileThunkCreator: (paramsUserId: string) => void
}

class ProfileContainer extends React.Component<ProfileContainerPropsType & {params: Params}> {

    componentDidMount() {
        this.props.params.userId && this.props.getProfileThunkCreator(this.props.params.userId)
        /*let userId = this.props.params.userId
        userId &&  usersAPI.getProfile(userId).then(data => {
            this.props.setUserProfile(data)
        })*/
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}

const mapStateToProps = (state: RootReducerType) => {
    return {
        profile: state.profilePage.profile
    }

}

function withRouter(Component: ComponentType<ProfileContainerPropsType & {params: Params}> ) {

    function ComponentWithRouterProp(props:ProfileContainerPropsType) {
        return (
            <Component
                {...props}
                params={useParams()}
            />
        );
    }

    return ComponentWithRouterProp;
}
/*let WithUrlDataContainerComponent = withRouter(ProfileContainer)*/

export default connect(mapStateToProps, {setUserProfile, getProfileThunkCreator})(withRouter(ProfileContainer));