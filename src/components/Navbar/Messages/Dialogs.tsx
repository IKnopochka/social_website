import React from "react";
import classes from "./Dialogs.module.css";
import {DialogItem} from "./DialogItem/DialogItem";
import {MessageItem} from "./MessageItem/MessageItem";
import {DialogsPagePropsType} from "../../../state/store";
import MessageForm, {MessageFormPropsType} from "./MessageForm/MessageForm";


const Dialogs = (props: DialogsPagePropsType) => {

    let dialogsElements = props.dialogs.map(d => (<DialogItem id={d.id} name={d.name} src={d.src}/>))
    let messagesElements = props.messages.map(m => (<MessageItem id={m.id} message={m.message}/>))

    const Submit = (data: MessageFormPropsType) => {
        props.onAddMessage(data.message)
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.friends}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
                <MessageForm onSubmit={Submit}/>
            </div>
        </div>
    )
}

export default Dialogs