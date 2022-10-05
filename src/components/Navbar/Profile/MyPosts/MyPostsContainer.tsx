import React from "react";
import {addPost, PostsPropsType, updateNewPostText} from "../../../../state/profilePageReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {RootReducerType} from "../../../../state/redux-store";
import {PostsMapToDispatchPropsType} from "../../../../state/store";

const mapStateToProps = (state: RootReducerType) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

const mapDispatchToProps = (dispatch: Dispatch): PostsMapToDispatchPropsType => {
    return {
        updateNewPostText: (text: string) => {dispatch(updateNewPostText(text))},
        addPost: () => {dispatch(addPost()
)
}
    }
}

const SuperMyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default SuperMyPostsContainer;