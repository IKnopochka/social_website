import React, {Component, ComponentType} from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {
    getProfileThunkCreator,
    ProfileMapStateToPropsType,
} from "../../../state/profilePageReducer";
import {RootReducerType} from "../../../state/redux-store";
import {Params, Navigate, useLocation, useNavigate, useParams} from "react-router-dom";

type ProfileContainerPropsType = ProfileMapStateToPropsType & {
    getProfileThunkCreator: (paramsUserId: string) => void
    isAuth: boolean
}

class ProfileContainer extends React.Component<ProfileContainerPropsType & {params: Params}> {

    componentDidMount() {
        this.props.params.userId && this.props.getProfileThunkCreator(this.props.params.userId)
    }

    render() {

        if(!this.props.isAuth) return <Navigate to={'/login'}/>

        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}

const mapStateToProps = (state: RootReducerType) => {
    return {
        profile: state.profilePage.profile,
        isAuth: state.auth.isAuth
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

export default connect(mapStateToProps, {getProfileThunkCreator})(withRouter(ProfileContainer));