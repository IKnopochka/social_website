import React from 'react';
import { DialogsPropsType, MessageItemProps} from "./store";
import {addPost, updateNewPostText} from "./profilePageReducer";

const initialState: DialogsPropsType = {
    dialogs: [
        {id: 1,  name: 'Michael', src: 'https://vjoy.cc/wp-content/uploads/2019/06/27-28.jpg'},
        {id: 2,  name: 'Irina', src: 'https://vjoy.cc/wp-content/uploads/2019/06/20-31.jpg'},
        {id: 3,  name: 'Kathryn', src: 'https://vjoy.cc/wp-content/uploads/2019/06/4-30.jpg'},
        {id: 4,  name: 'Nina', src: 'https://vjoy.cc/wp-content/uploads/2019/06/16-26.jpg'},
        {id: 5,  name: 'Alina', src: 'https://vjoy.cc/wp-content/uploads/2019/06/19-27.jpg'}
    ],
    messages: [
        {id: 1, message: "Hey"},
        {id: 2, message: "What's up?"},
        {id: 3, message: "not bad. How was your day?"},
        {id: 4, message: "Went to the cinema. "},
    ],
    newMessageText: ""
}

export type ActionTypes = ReturnType<typeof AddMessageActionCreator> |
    ReturnType<typeof UpdateMessageActionCreator>

export const DialogsPageReducer = (state: DialogsPropsType = initialState, action: ActionTypes): DialogsPropsType => {
    switch (action.type) {
        case('SEND-MESSAGE'):
            const newTextMessage: MessageItemProps = {
                id: 7,
                message: state.newMessageText
            }
            return {...state, messages: [...state.messages, newTextMessage], newMessageText: ""}
        case('UPDATE-NEW-MESSAGE-TEXT'):
            return {...state, newMessageText: action.newMessage}
        default:
            return state;
    }
};

//Action Creators
export const UpdateMessageActionCreator = (message: string) =>  ({type: 'UPDATE-NEW-MESSAGE-TEXT', newMessage: message} as const)
export const AddMessageActionCreator = () =>  ({type: 'SEND-MESSAGE',} as const)

export default DialogsPageReducer;