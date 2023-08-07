import React from "react";
import {addPost} from "s1-main/m2-bll/profile-reducer";
import MyPosts from "s2-features/f2-profile/MyPosts/MyPosts";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {AppRootStateType} from "s1-main/m3-dal/store";
import {PostsMapToDispatchPropsType} from "s1-main/m3-dal/types";

const mapStateToProps = (state: AppRootStateType) => {
    return {
        posts: state.profilePage.posts
    }
}

const mapDispatchToProps = (dispatch: Dispatch): PostsMapToDispatchPropsType => {
    return {
        addPost:(post: string) => {dispatch(addPost(post))}
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;