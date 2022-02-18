import React from "react";
import classes from "./Dialogs.module.css";
import {DialogItem} from "./DialogItem/DialogItem";
import {MessageItem} from "./MessageItem/MessageItem";
import {ConversationsPropsType} from "../../../state/State";


const Dialogs = (props: ConversationsPropsType) => {

    return (
        <div className={classes.dialogs}>
            <div className={classes.friends}>

                {props.dialogs.map(d => (<DialogItem id={d.id} name={d.name} src={d.src}/>))}

            </div>
            <div className={classes.messages}>
                {props.messages.map(m => (<MessageItem id={m.id} message={m.message}/>))}
                <div className={classes.textArea}>
                    <textarea></textarea>
                    <div>
                        <button>Add Message</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Dialogs