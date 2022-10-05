import classes from "./Post.module.css";
import React from "react";
import {PostItemType} from "../../../../../state/profilePageReducer";


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