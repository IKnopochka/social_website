import React from 'react';
import {AppThunk} from "./redux-store";

import {getAuthUserData} from "./authReducer";


let initialState = {
    initialized: false
}


export const AppReducer = (state: initialStateType = initialState, action: AppActionType): initialStateType => {
    switch (action.type) {
        case "INITIALIZED-SUCCESS":
            return {...state, initialized: true}
        case 'FAKE':
            return {...state}
        default:
            return {...state}
    }
};

//ActionCreators
export const initializedSuccess = () => ({type: "INITIALIZED-SUCCESS"} as const)

//ThunkCreators
export const initializeApp = (): AppThunk => dispatch => {
    const promise = dispatch(getAuthUserData())
    promise.then(() => {
        dispatch(initializedSuccess())
    })
}

//Types
export type initialStateType = typeof initialState
export type AppActionType = ReturnType<typeof initializedSuccess> | any

