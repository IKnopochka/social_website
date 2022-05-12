import React from 'react';
import {ActionTypes, DialogsPropsType, MessageItemProps} from "./State";

export const DialogsPageReducer = (state: DialogsPropsType, action: ActionTypes) => {
    if (action.type === 'UPDATE-NEW-MESSAGE-TEXT') {
        state.newMessageText = action.newMessage;
    } else if (action.type === 'SEND-MESSAGE') {
        const newTextMessage: MessageItemProps = {
            id:7,
            message: state.newMessageText
        }
        state.messages.push(newTextMessage)
        state.newMessageText = '';
    }
    return state;
};
export default DialogsPageReducer;