import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import classes from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo"
import {ProfilePropsType} from "../../../state/State";




const Profile = (props: ProfilePropsType) => {
    return (
        <div className={classes.content}>
            <ProfileInfo/>
            <MyPosts posts={props.posts} newPostText={props.newPostText} dispatch={props.dispatch}/>
        </div>
    )
}
export default Profile;