import React from "react";
import classes from "s2-features/f2-profile/ProfileInfo/ProfileInfo.module.css";

import Preloader from "s1-main/m1-ui/common/preloader/Preloader";

import {ProfileStatusWithHooks} from "s2-features/f2-profile/ProfileInfo/ProfileStatusWithHooks";
import {ProfileType} from "s1-main/m3-dal/profileAPI";

type ProfileInfoProps = {
    profile: ProfileType
    status: string
    updateStatus: (status: string) => void
}

const ProfileInfo = (props: ProfileInfoProps) => {
    if(!props.profile) return <Preloader/>
    return <div>
            {/*<div>
                <img
                    src='https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg'/>
            </div>*/}
            <div className={classes.description}>
                <img src={props.profile.photos.small || 'https://vjoy.cc/wp-content/uploads/2019/06/9-29.jpg'}/>
                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
                {/*<ProfileStatus status={props.status} updateStatus={props.updateStatus}/>*/}
                ava + description
            </div>
        </div>

}

export default ProfileInfo