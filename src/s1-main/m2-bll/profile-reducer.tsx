import React from 'react';
import { Dispatch } from 'redux'
import {profileAPI, ProfileType} from "s1-main/m3-dal/profileAPI";

const initialState: ProfilePagePropsType = {
    posts: [
        {id: 1, message: 'Hi, how are you', likeCount: 2},
        {id: 2, message: 'It is my first post', likeCount: 5},
        {id: 3, message: 'Welcome!', likeCount: 78}
    ],
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
        userId: 0,
        photos: {
            small: "",
            large: ""
        }
    }
}

export const profileReducer = (state: ProfilePagePropsType = initialState, action: ProfileActionTypes): ProfilePagePropsType => {
    switch (action.type) {
        case ('ADD-POST'):
            return {
                ...state, posts: [...state.posts, {
                    id: 9,
                    message: action.newPost,
                    likeCount: 0
                }]
            };
        case 'SET-USER-PROFILE':
            return {...state, profile: action.profile};
        case 'SET-STATUS' :
            return {...state, status: action.status};
        case 'DELETE-POST':
            return {...state, posts: state.posts.filter(p => p.id !== action.postId)}
        case 'UPLOAD-PROFILE-PICTURE':
            return {...state, profile: {...state.profile, photos: {...state.profile.photos, small: action.image, large: action.image}}}
        default:
            return state
    }
};

//Action Creators
export const addPost = (newPost: string) => ({type: 'ADD-POST', newPost} as const)
export const setUserProfile = (profile: ProfileType) => ({type: 'SET-USER-PROFILE', profile} as const)
export const setStatus = (status: string) => ({type: 'SET-STATUS', status} as const)
export const deletePost = (postId: number) => ({type: 'DELETE-POST', postId} as const)
export const uploadProfilePicture = (image: string) => ({type: 'UPLOAD-PROFILE-PICTURE', image} as const)

//Thunk Creators
export const getProfileThunkCreator = (paramsUserId: number) => (dispatch: Dispatch) => {
        profileAPI.getProfile(paramsUserId).then(data => {
            dispatch(setUserProfile(data))
        })
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
export const deletePostThunkCreator = (postId: number) => {
    return (dispatch: Dispatch) => {
        dispatch(deletePost(postId))
    }
}
export const changeProfileImageTC = (image: string) => (dispatch: Dispatch) => {
    console.log('changeImageTc happened')
    profileAPI.uploadPhoto(image)
        .then(res => {
            if (res.data.data.resultCode === 0) {
                console.log('success')
                dispatch(uploadProfilePicture(image))
            }
        })
}


//types
export type ProfileActionTypes =
    | ReturnType<typeof addPost>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof setStatus>
    | ReturnType<typeof deletePost>
    | ReturnType<typeof uploadProfilePicture>

export type PostItemType = {
    id: number
    message: string
    likeCount: number
}

export type PostsPropsType = {
    posts: Array<PostItemType>
    status: string
}

export type ProfilePagePropsType = {profile: ProfileType} & PostsPropsType