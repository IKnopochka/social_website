import React, {Component, ComponentType} from "react";
import Profile from "./Profile";
import {usersAPI} from "../../../API/API";
import {connect} from "react-redux";
import {
    ProfileMapStateToPropsType,
    ProfilePropsType,
    setUserProfile
} from "../../../state/profilePageReducer";
import {RootReducerType} from "../../../state/redux-store";
import {Params, useLocation, useNavigate, useParams} from "react-router-dom";

type ProfileContainerPropsType = ProfileMapStateToPropsType & {
    setUserProfile: (data: ProfilePropsType) => void
}

class ProfileContainer extends React.Component<ProfileContainerPropsType & {params: Params}> {

    componentDidMount() {
        let userId = this.props.params.userId
        userId &&  usersAPI.getProfile(userId).then(response => {
            this.props.setUserProfile(response.data)
        })
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

export default connect(mapStateToProps, {setUserProfile})(withRouter(ProfileContainer));