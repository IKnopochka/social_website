import React from "react";
import Profile from "./Profile";
import {usersAPI} from "../../../API/API";
import {connect} from "react-redux";
import {
    OnlyProfilePropsType,
    ProfilePropsType,
    setUserProfile
} from "../../../state/profilePageReducer";
import {RootReducerType} from "../../../state/redux-store";

type ProfileContainerPropsType = OnlyProfilePropsType & {
    setUserProfile: (data: ProfilePropsType) => void
}

class ProfileContainer extends React.Component<ProfileContainerPropsType> {

    componentDidMount() {
        // @ts-ignore
        usersAPI.getProfile(this.props.profile.userId).then(response => {
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
export default connect(mapStateToProps, {setUserProfile})(ProfileContainer);