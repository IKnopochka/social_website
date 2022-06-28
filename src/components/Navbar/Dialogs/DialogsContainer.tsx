import React from "react";
import {ReduxStorePropsType} from "../../../state/store";
import {AddMessageActionCreator, UpdateMessageActionCreator} from "../../../state/dialogsPageReducer";
import Dialogs from "./Dialogs";


const DialogsContainer = (props: ReduxStorePropsType) => {
    const onAddMessage = () => {
        props.store.dispatch(AddMessageActionCreator())
    }
    const onTextMessageChange = (text: string) => {
        props.store.dispatch(UpdateMessageActionCreator(text))
    }

    return (
        <Dialogs dialogs={props.store.getState().dialogsPage.dialogs}
                 messages={props.store.getState().dialogsPage.messages}
                 newMessageText={props.store.getState().dialogsPage.newMessageText}
                 onAddMessage={onAddMessage}
                 onTextMessageChange={onTextMessageChange}
        />
    )
}

export default DialogsContainer