import React from "react";
import s from 's2-features/f2-profile/Profile.module.css'

import Preloader from "s1-main/m1-ui/common/preloader/Preloader";

import {ProfileStatusWithHooks} from "s2-features/f2-profile/ProfileDescription/ProfileInfo/ProfileStatusWithHooks";
import {ProfileType} from "s1-main/m3-dal/profileAPI";
import Paper from "@mui/material/Paper";
import {ProfileAvatar} from "s2-features/f2-profile/ProfileDescription/ProfileAvatar";
import {useSelector} from "react-redux";
import {profileAvatarSelector} from "s1-main/m1-ui/common/selectors/selectors";

type ProfileInfoProps = {
    profile: ProfileType
    status: string
    updateStatus: (status: string) => void
}

const ProfileInfo = (props: ProfileInfoProps) => {
    const avatar = useSelector(profileAvatarSelector)

    if (!props.profile) return <Preloader/>
    return <Paper elevation={5} className={s.paper}>
            <ProfileAvatar size={200} src={avatar} withButton/>
            <div className={s.description}>
                <h1>{props.profile.fullName}</h1>
                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
            </div>

        </Paper>

}

export default ProfileInfo