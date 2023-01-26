import React from 'react';
import {authAPI} from "../API/API";
import {AppThunk} from "./redux-store";
import {stopSubmit} from "redux-form";

export type DataStateType = typeof initialState
export type AuthActionTypes = ReturnType<typeof setAuthUserData>

let initialState = {
    id: null,
    email: null,
    login: false,
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
//ActionCreators
export const setAuthUserData = (data: DataStateType, isAuth: boolean) => ({type: "SET-USER-DATA", data, isAuth} as const)

//ThunkCreators
export const getAuthUserData = (): AppThunk<Promise<void | number>> => dispatch => {
    return authAPI.authMe()
        .then(data => {
        if (data.resultCode === 0) {
            dispatch(setAuthUserData(data.data, true))
        }
    })
}
export const login = (email: string, password: string, rememberMe: boolean):AppThunk => dispatch => {
    authAPI.login(email, password, rememberMe).then(data => {
        if (data.resultCode === 0) {
            dispatch(getAuthUserData())
        } else{
            dispatch(stopSubmit('Login', {_error: data.messages[0]}))
        }
    })
}
export const logout = ():AppThunk => dispatch => {
    authAPI.logout().then(data => {
        if (data.resultCode === 0) {
            dispatch(setAuthUserData(initialState,false))
        }
    })
}