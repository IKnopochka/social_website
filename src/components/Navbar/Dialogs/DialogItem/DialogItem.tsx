import React from "react";
import classes from "./../Dialogs.module.css";
import {NavLink} from "react-router-dom";
import {DialogItemProps} from "../../../../state/store";

export const DialogItem = (props: DialogItemProps) => {
    return <div className={classes.name}>
        <NavLink to={"dialogs/*/" + props.id} className={({isActive}) => isActive ? classes.active : classes.name}>
            <img src={props.src}/>
            {props.name}
        </NavLink>
    </div>
}