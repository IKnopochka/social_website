import React from "react";
import classes from 's2-features/f2-profile/Profile.module.css';
import ProfileInfo from "s2-features/f2-profile/ProfileInfo/ProfileInfo"
import MyPostsContainer from "s2-features/f2-profile/MyPosts/MyPostsContainer";
import {ProfileMapStateToPropsType} from "s2-features/f2-profile/ProfileContainer";

const Profile = (props: ProfileMapStateToPropsType & {updateStatus: (status: string) => void}) => {
    return (
        <div className={classes.content}>
            <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
            <MyPostsContainer/>
        </div>
    )
}
export default Profile;