import React from "react";
import classes from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo"
import SuperMyPostsContainer from "./MyPosts/MyPostsContainer";




const Profile = () => {
    return (
        <div className={classes.content}>
            <ProfileInfo/>
            <SuperMyPostsContainer/>
            {/*<MyPosts posts={props.posts} newPostText={props.newPostText} dispatch={props.dispatch}/>*/}
        </div>
    )
}
export default Profile;