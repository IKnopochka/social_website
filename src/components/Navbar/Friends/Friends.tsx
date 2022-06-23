import React from "react";
import {SidebarItemProps} from "../../../state/store";
import classes from "../Navbar.module.css";


export const Friends = (props: SidebarItemProps) => {
    return (
        <div>
            <img src={props.src} className={classes.img}/>
            <div>{props.name}</div>
        </div>
    )
}