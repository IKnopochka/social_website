import React from "react";
import Profile from "./Profile";
import {usersAPI} from "../../../API/API";
import {connect} from "react-redux";
import {PostsPropsType, setUserProfile} from "../../../state/profilePageReducer";
import {RootReducerType} from "../../../state/redux-store";

type ProfileContainerPropsType = PostsPropsType & {
    setUserProfile: (profile: any) => void
}
class ProfileContainer extends React.Component<ProfileContainerPropsType> {

    componentDidMount() {
        usersAPI.getProfile().then(response => {
            this.props.setUserProfile(response.data)
        })
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}

const mapStateToProps = (state: RootReducerType) => ({
    profile: state.profilePage.profile
})
export default connect(mapStateToProps, {setUserProfile})(ProfileContainer);