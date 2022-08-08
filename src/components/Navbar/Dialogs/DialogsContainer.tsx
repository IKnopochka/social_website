import React from "react";
import {AddMessageActionCreator, initialState, UpdateMessageActionCreator} from "../../../state/dialogsPageReducer";
import Dialogs from "./Dialogs";

import {connect} from "react-redux";
import {DialogsPropsType} from "../../../state/store";


/*const DialogsContainer = () => {

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
}*/

let mapStateToProps = (state: any = initialState) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newMessageText: state.dialogsPage.newMessageText
    }
}
let mapDispatchToProps = (dispatch: any) => {
    return {
        onAddMessage: () => {dispatch(AddMessageActionCreator())},
        onTextMessageChange: (text: string) => {dispatch(UpdateMessageActionCreator(text))}
    }
}

export const SuperDialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)