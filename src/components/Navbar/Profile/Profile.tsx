import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import classes from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo"
import {ProfilePropsType} from "../../../state/store";




const Profile = (props: ProfilePropsType) => {
    debugger
    return (
        <div className={classes.content}>
            <ProfileInfo/>
            <MyPosts posts={props.posts} newPostText={props.newPostText} dispatch={props.dispatch}/>
        </div>
    )
}
export default Profile;