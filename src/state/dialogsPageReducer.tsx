import React from 'react';
import {ActionTypes, DialogsPropsType, MessageItemProps} from "./State";

export const DialogsPageReducer = (state: DialogsPropsType, action: ActionTypes) => {
    switch (action.type) {
        case('SEND-MESSAGE'):
            const newTextMessage: MessageItemProps = {
                id: 7,
                message: state.newMessageText
            }
            state.messages.push(newTextMessage)
            state.newMessageText = '';
            return state
        case('UPDATE-NEW-MESSAGE-TEXT'):
            state.newMessageText = action.newMessage;
            return state

        default:
            return state;
    }
};
export default DialogsPageReducer;