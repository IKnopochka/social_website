import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import classes from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo"
import {PostsPropsType} from "../../../state/State";

const Profile = (props: PostsPropsType) => {
    return (
        <div className={classes.content}>
            <ProfileInfo/>
            <MyPosts posts={props.posts} addPost={props.addPost} newPostText={props.newPostText}/>
        </div>
    )
}
export default Profile;