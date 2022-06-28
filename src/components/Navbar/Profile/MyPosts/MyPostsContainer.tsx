import React from "react";
import { ReduxStorePropsType} from "../../../../state/store";
import {AddPostActionCreator, UpdateNewPostTextActionCreator} from "../../../../state/profilePageReducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props: ReduxStorePropsType) => {

    const onAddPost = () => {
        props.store.dispatch(AddPostActionCreator());
    }

    const onPostChange = (text: string) => {
        /*props.updateNewPostText(newPostElement.current.value);*/
        /*props.dispatch({type: 'UPDATE-NEW-POST-TEXT', newText: newPostElement.current.value});*/
        props.store.dispatch(UpdateNewPostTextActionCreator(text));

    }

    return (
        <MyPosts updateNewPostText={onPostChange}
                 addPost={onAddPost}
                 posts={props.store.getState().profilePage.posts}
                 newPostText={props.store.getState().profilePage.newPostText}/>
    )
}

export default MyPostsContainer;