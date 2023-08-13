import React from "react";
import s from "s2-features/f3-messages/Dialogs.module.css";
import {NavLink} from "react-router-dom";
import {DialogFriendStateType} from "s1-main/m2-bll/message-reducer";
import {SuperButton} from "s1-main/m1-ui/common/SuperButton/SuperButton";
import {PATH} from "s1-main/m1-ui/routes/AppRoutes";

export const FriendBox = (props: DialogFriendStateType) => {
    return <SuperButton xType='secondary' >
        <NavLink to={PATH.DIALOGS + props.id} className={({isActive}) => isActive ? s.active : s.friendName}>
            <img src={props.src}/>
            {props.name}
        </NavLink>
    </SuperButton>
}