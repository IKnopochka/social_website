import React from "react";
import {AddMessageActionCreator, UpdateMessageActionCreator} from "../../../state/dialogsPageReducer";
import Dialogs from "./Dialogs";

import {connect} from "react-redux";
import {RootReducerType} from "../../../state/redux-store";
import {DialogsMapToDispatchPropsType, DialogsPropsType} from "../../../state/store";
import {Dispatch} from "redux";


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

let mapStateToProps = (state: RootReducerType): DialogsPropsType & {isAuth: boolean} => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newMessageText: state.dialogsPage.newMessageText,
        isAuth: state.auth.isAuth
    }
}
let mapDispatchToProps = (dispatch: Dispatch): DialogsMapToDispatchPropsType => {
    return {
        onAddMessage: () => {dispatch(AddMessageActionCreator())},
        onTextMessageChange: (text: string) => {dispatch(UpdateMessageActionCreator(text))}
    }
}

export const SuperDialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)