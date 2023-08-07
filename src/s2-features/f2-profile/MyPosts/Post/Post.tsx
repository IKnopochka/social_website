import classes from "s2-features/f2-profile/MyPosts/Post/Post.module.css";
import React from "react";
import {PostItemType} from "s1-main/m2-bll/profile-reducer";


const Post = (props: PostItemType ) => {
    return (
        <div className={classes.item}>
            <img
                src='https://vjoy.cc/wp-content/uploads/2019/06/9-29.jpg'
            />
            {props.message};
            <div>
                <span>Like {props.likeCount}</span>
            </div>
        </div>
    )
}

export default Post;