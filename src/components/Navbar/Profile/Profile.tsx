import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import classes from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo"
import { ReduxStorePropsType} from "../../../state/store";
import MyPostsContainer from "./MyPosts/MyPostsContainer";




const Profile = () => {
    debugger
    return (
        <div className={classes.content}>
            <ProfileInfo/>
            <MyPostsContainer/>
            {/*<MyPosts posts={props.posts} newPostText={props.newPostText} dispatch={props.dispatch}/>*/}
        </div>
    )
}
export default Profile;