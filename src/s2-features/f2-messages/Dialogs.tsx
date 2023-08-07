import React from "react";
import classes from "s2-features/f2-messages/Dialogs.module.css";
import {DialogItem} from "s2-features/f2-messages/DialogItem/DialogItem";
import {MessageItem} from "s2-features/f2-messages/MessageItem/MessageItem";
import {DialogsPagePropsType} from "s1-main/m3-dal/types";
import MessageForm, {MessageFormPropsType} from "s2-features/f2-messages/MessageForm/MessageForm";


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