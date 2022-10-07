import React from "react";
import classes from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo"
import SuperMyPostsContainer from "./MyPosts/MyPostsContainer";
import {ProfileMapStateToPropsType} from "../../../state/profilePageReducer";


const Profile = (props: ProfileMapStateToPropsType) => {
    return (
        <div className={classes.content}>
            <ProfileInfo profile={props.profile}/>
            <SuperMyPostsContainer/>
        </div>
    )
}
export default Profile;