import React from 'react';
import {Dispatch} from "redux";
import {authAPI} from "../API/API";
import {AppThunk} from "./redux-store";
import {FormAction, stopSubmit} from "redux-form";

export type DataStateType = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}
export type AuthActionTypes = ReturnType<typeof setAuthUserData>

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}


export const AuthReducer = (state: DataStateType = initialState, action: AuthActionTypes): DataStateType => {
    switch (action.type) {
        case "SET-USER-DATA":
            return {...state, ...action.data, isAuth: action.isAuth}
        default:
            return {...state}
    }
};

export const setAuthUserData = (data: DataStateType, isAuth: boolean) => ({type: "SET-USER-DATA", data, isAuth} as const)

export const getAuthUserDataTC = (): AppThunk => dispatch => {
    authAPI.authMe().then(data => {
        if (data.resultCode === 0) {
            dispatch(setAuthUserData(data.data, true))
        }
    })
}

export const loginTC = (email: string, password: string, rememberMe: boolean) => (dispatch: Dispatch<any>) => {
    authAPI.login(email, password, rememberMe).then(data => {
        if (data.resultCode === 0) {
            dispatch(getAuthUserDataTC())
        } else{
            dispatch(stopSubmit('Login', {_error: data.messages[0]}))
        }
    })
}
export const logoutTC = ():AppThunk => dispatch => {
    authAPI.logout().then(data => {
        if (data.resultCode === 0) {
            dispatch(setAuthUserData(initialState,false))
        }
    })
}
