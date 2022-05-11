import React from "react";
import classes from "./Dialogs.module.css";
import {DialogItem} from "./DialogItem/DialogItem";
import {MessageItem} from "./MessageItem/MessageItem";
import {AddMessageActionCreator, DialogsPagePropsType, UpdateMessageActionCreator} from "../../../state/State";


const Dialogs = (props: DialogsPagePropsType) => {

    let dialogsElements = props.dialogs.map(d => (<DialogItem id={d.id} name={d.name} src={d.src}/>))
    let messagesElements = props.messages.map(m => (<MessageItem id={m.id} message={m.message}/>))

    let newMessageElement = React.createRef<HTMLTextAreaElement>()

    const onAddMessage = () => {
        props.dispatch(AddMessageActionCreator())
    }
    const onTextMessageChange = () => {
        if (newMessageElement.current) {
            props.dispatch(UpdateMessageActionCreator(newMessageElement.current.value))
        }
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.friends}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
                <div className={classes.textArea}>
                    <textarea placeholder={'Enter your message'}
                              ref={newMessageElement}
                              onChange={onTextMessageChange}
                              value={props.newMessageText}/>
                    <div>
                        <button onClick={onAddMessage}>Add Message</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Dialogs