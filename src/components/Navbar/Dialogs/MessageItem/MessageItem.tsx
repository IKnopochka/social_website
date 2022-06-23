import React from "react";
import classes from "./../Dialogs.module.css";
import {MessageItemProps} from "../../../../state/store";

export const MessageItem = (props: MessageItemProps) => {
    return <div className={classes.msg}>{props.message}</div>
}