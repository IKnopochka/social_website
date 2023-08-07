import classes from "s2-features/f2-profile/MyPosts/MyPosts.module.css";
import React from "react";
import Post from "s2-features/f2-profile/MyPosts/Post/Post";
import {PostsMapToDispatchPropsType} from "s1-main/m3-dal/types";
import {PostItemType} from "s1-main/m2-bll/profile-reducer";
import PostsForm, {PostsFormPropsType} from "s2-features/f2-profile/PostsForm/PostsForm";

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