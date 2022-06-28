import React from "react";
import {AddMessageActionCreator, UpdateMessageActionCreator} from "../../../state/dialogsPageReducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../../StoreContext";


const DialogsContainer = () => {

    return (
        <StoreContext.Consumer>
            {
                store => {
                    const onAddMessage = () => {
                        store.dispatch(AddMessageActionCreator())
                    }
                    const onTextMessageChange = (text: string) => {
                        store.dispatch(UpdateMessageActionCreator(text))
                    }
                    return (
                        <Dialogs dialogs={store.getState().dialogsPage.dialogs}
                                 messages={store.getState().dialogsPage.messages}
                                 newMessageText={store.getState().dialogsPage.newMessageText}
                                 onAddMessage={onAddMessage}
                                 onTextMessageChange={onTextMessageChange}
                        />
                    )
                }
            }
        </StoreContext.Consumer>

    )
}

export default DialogsContainer