import s from "../Profile.module.css";
import React from "react";
import Post from "s2-features/f2-profile/MyPosts/Post/Post";
import {PostsMapToDispatchPropsType} from "s1-main/m3-dal/types";
import {PostItemType} from "s1-main/m2-bll/profile-reducer";
import PostsForm, {PostsFormPropsType} from "s2-features/f2-profile/MyPosts/PostsForm/PostsForm";
import Paper from "@mui/material/Paper";

export type MyPostsPropsType = PostsMapToDispatchPropsType & {
    posts: Array<PostItemType>
}

const MyPosts = (props: MyPostsPropsType) => {

    let postElements = props.posts.map(p => (<Post id={p.id} message={p.message} likeCount={p.likeCount}/>))

    let newPostElement = React.createRef<HTMLTextAreaElement>();

    const Submit = (data: PostsFormPropsType) => {
        props.addPost(data.post)
    }

    return <Paper elevation={5} className={s.postsBlock}>
            <PostsForm onSubmit={Submit}/>
            <div>
                {postElements}
            </div>
    </Paper>
}

export default MyPosts;