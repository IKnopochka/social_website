import React from "react";
import classes from "./Dialogs.module.css";
import {DialogItem} from "./DialogItem/DialogItem";
import {MessageItem} from "./MessageItem/MessageItem";
import { DialogsPagePropsType} from "../../../state/State";


const Dialogs = (props: DialogsPagePropsType) => {

    let dialogsElements = props.dialogs.map(d => (<DialogItem id={d.id} name={d.name} src={d.src}/>))
    let messagesElements = props.messages.map(m => (<MessageItem id={m.id} message={m.message}/>))

    return (
        <div className={classes.dialogs}>
            <div className={classes.friends}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
                <div className={classes.textArea}>
                    <textarea placeholder={'Enter your message'}>{props.newMessageText}</textarea>
                    <div>
                        <button>Add Message</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Dialogs