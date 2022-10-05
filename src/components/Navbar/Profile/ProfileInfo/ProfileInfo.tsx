import React from "react";
import classes from "./ProfileInfo.module.css";
import {ProfilePropsType} from "../Profile";

const ProfileInfo = (props: ProfilePropsType) => {
    return <div>
        <div>
            <img
                src='https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg'/>
        </div>
        <div className={classes.description}>
            <img src={props.profile.photos.small}/>
            ava + description
        </div>
    </div>
}

export default ProfileInfo