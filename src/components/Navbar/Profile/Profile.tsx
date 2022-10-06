import React from "react";
import classes from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo"
import SuperMyPostsContainer from "./MyPosts/MyPostsContainer";
import {OnlyProfilePropsType} from "../../../state/profilePageReducer";


const Profile = (props: OnlyProfilePropsType) => {
    return (
        <div className={classes.content}>
            <ProfileInfo profile={props.profile}/>
            <SuperMyPostsContainer/>
        </div>
    )
}
export default Profile;