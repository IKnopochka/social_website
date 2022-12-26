import React from "react";
import {addPost} from "../../../../state/profilePageReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {RootReducerType} from "../../../../state/redux-store";
import {PostsMapToDispatchPropsType} from "../../../../state/store";

const mapStateToProps = (state: RootReducerType) => {
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