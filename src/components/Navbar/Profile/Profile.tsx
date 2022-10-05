import React from "react";
import classes from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo"
import SuperMyPostsContainer from "./MyPosts/MyPostsContainer";


export type ProfilePropsType = {
    profile: any
}

const Profile = (props: ProfilePropsType) => {
    return (
        <div className={classes.content}>
            <ProfileInfo profile={props.profile}/>
            <SuperMyPostsContainer/>
        </div>
    )
}
export default Profile;