import React from "react";
import {addPost} from "../../../../state/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {AppRootStateType} from "../../../../state/redux-store";
import {PostsMapToDispatchPropsType} from "../../../../state/store";

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