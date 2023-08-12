import s from "../../Profile.module.css";
import React from "react";
import {PostItemType} from "s1-main/m2-bll/profile-reducer";
import {ProfileAvatar} from "s2-features/f2-profile/ProfileDescription/ProfileAvatar";


const Post = (props: PostItemType ) => {
    return (
        <div className={s.postItem}>
            <ProfileAvatar size={50}/>
            <div className={s.postMessage}>
                {props.message}
            </div>

        </div>
    )
}

export default Post;