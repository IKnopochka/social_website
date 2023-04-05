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
        case "auth/SET-USER-DATA":
            return {...state, ...action.data, isAuth: action.isAuth}
        default:
            return {...state}
    }
};
//ActionCreators
export const setAuthUserData = (data: DataStateType, isAuth: boolean) => ({
    type: "auth/SET-USER-DATA",
    data,
    isAuth
} as const)

//ThunkCreators
export const getAuthUserData = (): AppThunk<Promise<void | number>> => async dispatch => {
    try {
        const res = await authAPI.authMe()
        if (res.resultCode === 0) {
            dispatch(setAuthUserData(res.data, true))
        }
    } catch (e) {}
}
export const login = (email: string, password: string, rememberMe: boolean): AppThunk => async dispatch => {
    try {
        const data = await authAPI.login(email, password, rememberMe)
            if (data.resultCode === 0) {
                dispatch(getAuthUserData())
            } else {
                dispatch(stopSubmit('Login', {_error: data.messages[0]}))
            }
    } catch (e) {}
}
export const logout = (): AppThunk => async dispatch => {
    try {
        const data = await authAPI.logout()
            if (data.resultCode === 0) {
                dispatch(setAuthUserData(initialState, false))
            }
    } catch (e) {}
}