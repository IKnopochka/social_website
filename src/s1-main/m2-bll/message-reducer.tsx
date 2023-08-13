import React from 'react';
import {v1} from "uuid";
import {Dispatch} from "redux";

export const MichailID = v1()
const IrinaID = v1()
const KathrynID = v1()
const MaryID = v1()

const initialState = {
    friends: [
        {id: MichailID, name: 'Michael', src: 'https://vjoy.cc/wp-content/uploads/2019/06/27-28.jpg'},
        {id: IrinaID, name: 'Irina', src: 'https://vjoy.cc/wp-content/uploads/2019/06/20-31.jpg'},
        {id: KathrynID, name: 'Kathryn', src: 'https://vjoy.cc/wp-content/uploads/2019/06/4-30.jpg'},
        {id: MaryID, name: 'Mary', src: 'https://vjoy.cc/wp-content/uploads/2019/06/16-26.jpg'},
    ] as DialogFriendStateType[],
    messages: {
        [MichailID]: [
            {id: v1(), personalMessage: "Hey"},
            {id: v1(), friendMessage: "Hey"},
            {id: v1(), personalMessage: "What's up?"},
            {id: v1(), friendMessage: "Im good, whats up to you? "},
            {id: v1(), personalMessage: "not bad either"},
            {id: v1(), personalMessage: "Wanna go for coffee?"},
            {id: v1(), friendMessage: "sure, great idea!"},
            {id: v1(), personalMessage: "great, wait for me downstairs"},
        ],
        [IrinaID]: [
            {id: v1(), personalMessage: "Hi"},
            {id: v1(), personalMessage: "any idea where to go?"},
            {id: v1(), personalMessage: "im bored"},
            {id: v1(), friendMessage: "hmmmm"},
            {id: v1(), friendMessage: "let me think..."},
        ],
        [KathrynID]: [
            {id: v1(), friendMessage: "do you know what was the homework"},
            {id: v1(), friendMessage: "hmmmm?"},
            {id: v1(), personalMessage: "have no idea"},
        ],
        [MaryID]: [
            {id: v1(), personalMessage: "Miss you"},
            {id: v1(), friendMessage: "Me too"},
        ],
    } as MessagesPropsType
}


export const MessageReducer = (state: ChatInitialStateType = initialState, action: DialogActionTypes): ChatInitialStateType => {
    switch (action.type) {
        case('SEND-MESSAGE'):
            return {...state, messages: {...state.messages, [action.userId]: [...state.messages[action.userId], {id: action.userId, personalMessage: action.newMessage}]}}
        default:
            return state;
    }
};

//Action Creators
export const AddMessageActionCreator = (userId: string, newMessage: string) => ({type: 'SEND-MESSAGE', userId, newMessage} as const)

//Thunk Creators
export const AddMessageThunkCreator = (userId: string, newMessage: string) => (dispatch: Dispatch) => {
    return dispatch(AddMessageActionCreator(userId, newMessage))
}

//types
export type ChatInitialStateType = typeof initialState
export type DialogFriendStateType = {
    id: string
    name: string
    src: string
}
export type MessagesPropsType = {
    [key: string]: SingleMessagePropsType[]
}
export type SingleMessagePropsType = {
    id: string,
    personalMessage?: string,
    friendMessage?: string
}
export type DialogActionTypes = ReturnType<typeof AddMessageActionCreator>
