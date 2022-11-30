import React from 'react';
import {Dispatch} from "redux";
import {profileAPI, usersAPI} from "../API/API";
import {ProfileMapStateToPropsType} from "../components/Navbar/Profile/ProfileContainer";

export type PostItemType = {
    id: number
    message: string
    likeCount: number
}

export type ProfilePropsType = null | {
    aboutMe: string | undefined
    contacts: {
        facebook: string
        website: string
        vk: string
        twitter: string
        instagram: string
        youtube: string
        github: string
        mainLink: string
    }
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: {
        small: string
        large: string
    }
}
export type PostsPropsType = {
    posts: Array<PostItemType>
    newPostText: string,
    status: string
}

export type ProfilePagePropsType = ProfileMapStateToPropsType & PostsPropsType

const initialState: ProfilePagePropsType = {
    posts: [
        {id: 1, message: 'Hi, how are you', likeCount: 2},
        {id: 2, message: 'It is my first post', likeCount: 5},
        {id: 3, message: 'Welcome!', likeCount: 78}
    ],
    newPostText: 'It_kamasutra',
    status: 'Curiosity',
    profile: {
        aboutMe: "Simple",
        contacts: {
            facebook: "string",
            website: "string",
            vk: "string",
            twitter: "string",
            instagram: "string",
            youtube: "string",
            github: "string",
            mainLink: "string"
        },
        lookingForAJob: true,
        lookingForAJobDescription: "string",
        fullName: "string",
        userId: 25201,
        photos: {
            small: "",
            large: ""
        }
    }
}

export type ActionTypes = ReturnType<typeof addPost> |
    ReturnType<typeof updateNewPostText> |
    ReturnType<typeof setUserProfile> |
    ReturnType<typeof setStatus>

const ProfilePageReducer = (state: ProfilePagePropsType = initialState, action: ActionTypes): ProfilePagePropsType => {
    switch (action.type) {
        case ('ADD-POST'):
            const newPost: PostItemType = {
                id: 9,
                message: state.newPostText,
                likeCount: 0
            }
            return {...state, posts: [...state.posts, newPost], newPostText: ""};
        case ('UPDATE-NEW-POST-TEXT'):
            return {...state, newPostText: action.newText};
        case 'SET-USER-PROFILE':
            return {...state, profile: action.profile};
        case 'SET-STATUS' :
            return {...state, status: action.status}
        default:
            return state
    }
};
//{...state.profile, aboutMe: action.status}
//Action Creators
export const addPost = () => {
    return {type: 'ADD-POST'} as const
}
export const updateNewPostText = (text: string) => ({type: 'UPDATE-NEW-POST-TEXT', newText: text} as const)
export const setUserProfile = (profile: ProfilePropsType) => ({type: 'SET-USER-PROFILE', profile} as const)
export const setStatus = (status: string) => ({type: 'SET-STATUS', status} as const)

export const getProfileThunkCreator = (paramsUserId: number) => {
    return (dispatch: Dispatch) => {
        profileAPI.getProfile(paramsUserId).then(data => {
            dispatch(setUserProfile(data))
        })
    }
}
export const getStatusThunkCreator = (userId: number) => {
    return (dispatch: Dispatch) => {
        profileAPI.getStatus(userId)
            .then(response => {
                dispatch(setStatus(response.data))
            })
    }
}
export const updateStatusThunkCreator = (status: string) => {
    return (dispatch: Dispatch) => {
        profileAPI.changeStatus(status)
            .then(response => {
                    if (response.data.resultCode === 0) {
                        dispatch(setStatus(status))
                    }
                }
            )
    }
}

export default ProfilePageReducer;