import React from 'react';
import { DialogsPropsType} from "s1-main/m3-dal/types";

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
    ]
}

export type DialogActionTypes = ReturnType<typeof AddMessageActionCreator>

export const DialogsPageReducer = (state: DialogsPropsType = initialState, action: DialogActionTypes): DialogsPropsType => {
    switch (action.type) {
        case('SEND-MESSAGE'):
            return {...state, messages: [...state.messages, {id: 7, message: action.newMessage}]}
        default:
            return state;
    }
};

//Action Creators
export const AddMessageActionCreator = (newMessage: string) =>  ({type: 'SEND-MESSAGE', newMessage} as const)

export default DialogsPageReducer;