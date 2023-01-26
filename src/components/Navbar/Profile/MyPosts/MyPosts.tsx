import classes from "./MyPosts.module.css";
import React from "react";
import Post from "./Post/Post";
import {PostsMapToDispatchPropsType} from "../../../../state/store";
import {PostItemType} from "../../../../state/profilePageReducer";
import PostsForm, {PostsFormPropsType} from "../PostsForm/PostsForm";

export type MyPostsPropsType = PostsMapToDispatchPropsType & {
    posts: Array<PostItemType>
}

const MyPosts = (props: MyPostsPropsType) => {

    let postElements = props.posts.map(p => (<Post id={p.id} message={p.message} likeCount={p.likeCount}/>))

    let newPostElement = React.createRef<HTMLTextAreaElement>();

    const Submit = (data: PostsFormPropsType) => {
        props.addPost(data.post)
    }

    return (
        <div className={classes.textArea}>
            my posts
            <PostsForm onSubmit={Submit}/>
            <div className={classes.posts}>
                {postElements}
            </div>
        </div>
    )
}

export default MyPosts;