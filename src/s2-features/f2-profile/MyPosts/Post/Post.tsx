import s from "../../Profile.module.css";
import React from "react";
import {PostItemType} from "s1-main/m2-bll/profile-reducer";
import {ProfileAvatar} from "s2-features/f2-profile/ProfileDescription/ProfileAvatar";
import {useSelector} from "react-redux";
import {profileAvatarSelector} from "s1-main/m1-ui/common/selectors/selectors";


const Post = (props: PostItemType ) => {
    const avatar = useSelector(profileAvatarSelector)
    return (
        <div className={s.postItem}>
            <ProfileAvatar src={avatar} size={50}/>
            <div className={s.postMessage}>
                {props.message}
            </div>

        </div>
    )
}

export default Post;