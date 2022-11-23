import React, {ChangeEvent} from "react";
import classes from "./Dialogs.module.css";
import {DialogItem} from "./DialogItem/DialogItem";
import {MessageItem} from "./MessageItem/MessageItem";
import { DialogsPagePropsType} from "../../../state/store";
import {Navigate} from "react-router-dom";



const Dialogs = (props: DialogsPagePropsType & {isAuth: boolean}) => {

    let dialogsElements = props.dialogs.map(d => (<DialogItem id={d.id} name={d.name} src={d.src}/>))
    let messagesElements = props.messages.map(m => (<MessageItem id={m.id} message={m.message}/>))

    let newMessageElement = React.createRef<HTMLTextAreaElement>()

    const onAddMessage = () => {
        props.onAddMessage()
        //props.dispatch(AddMessageActionCreator())
    }
    const onTextMessageChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        props.onTextMessageChange(event.target.value)
            //props.dispatch(UpdateMessageActionCreator(event.target.value))
    }

    if(!props.isAuth) return <Navigate to={'/login'}/>
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