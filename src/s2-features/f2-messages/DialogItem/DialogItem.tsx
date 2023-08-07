import React from "react";
import classes from "s2-features/f2-messages/Dialogs.module.css";
import {NavLink} from "react-router-dom";
import {DialogItemProps} from "s1-main/m3-dal/types";

export const DialogItem = (props: DialogItemProps) => {
    return <div className={classes.name}>
        <NavLink to={"dialogs/*/" + props.id} className={({isActive}) => isActive ? classes.active : classes.name}>
            <img src={props.src}/>
            {props.name}
        </NavLink>
    </div>
}