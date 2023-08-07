import React from "react";
import classes from "s2-features/f2-messages/Dialogs.module.css";
import {MessageItemProps} from "s1-main/m3-dal/types";

export const MessageItem = (props: MessageItemProps) => {

    return <div className={classes.msg}>{props.message}</div>
}