import React from 'react';
import {Dispatch} from "redux";
import {authAPI, usersAPI} from "../API/API";

export type DataStateType = {
    id: number | null
    email: string
    login: string
    isAuth: boolean
}
type ActionTypes = ReturnType<typeof setAuthUserData>

let initialState = {
    id: null,
    email: '',
    login: '',
    isAuth: false
}

export const AuthReducer = (state: DataStateType = initialState, action: ActionTypes): DataStateType => {
    switch (action.type) {
        case "SET-USER-DATA":
            return {...state, ...action.data, isAuth: true}
        default:
            return {...state}
    }
};

export const setAuthUserData = (data: DataStateType) => ({type: "SET-USER-DATA", data} as const)

export const setAuthUserDataThunkCreator = () => (dispatch: Dispatch) => {
        authAPI.authMe().then(data => {
            if(data.resultCode === 0) {
                dispatch(setAuthUserData(data.data))
            }
        })
    }
