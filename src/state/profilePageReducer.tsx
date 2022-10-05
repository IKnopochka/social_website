import React from 'react';

export type PostItemType = {
    id: number
    message: string
    likeCount: number
}
export type PostsPropsType = {
    posts?: Array<PostItemType>
    newPostText?: string,
    profile?: null
}

const initialState: PostsPropsType = {
    posts: [
        {id: 1, message: 'Hi, how are you', likeCount: 2},
        {id: 2, message: 'It is my first post', likeCount: 5},
        {id: 3, message: 'Welcome!', likeCount: 78}
    ],
    newPostText: 'It_kamasutra',
    profile: null
}

export type ActionTypes = ReturnType<typeof addPost> |
    ReturnType<typeof updateNewPostText> |
    ReturnType<typeof setUserProfile>

const ProfilePageReducer = (state: PostsPropsType = initialState, action: ActionTypes): PostsPropsType => {
    switch (action.type) {
        case ('ADD-POST'):
            // @ts-ignore
            const newPost: PostItemType = {
                id: 9,
                message: state.newPostText,
                likeCount: 0
            }
            // @ts-ignore
            return {...state, posts: [...state.posts, newPost], newPostText: ""};
        case ('UPDATE-NEW-POST-TEXT'):
            return {...state, newPostText: action.newText};
        case 'SET-USER-PROFILE':
            return {...state, profile: action.profile};
        default:
            return state
    }
};

//Action Creators
export const addPost = () =>  {
    return {type: 'ADD-POST'} as const
}
export const updateNewPostText = (text:string) => (
    {type: 'UPDATE-NEW-POST-TEXT', newText: text} as const
)
export const setUserProfile = (profile: any) => (
    {type: 'SET-USER-PROFILE', profile} as const
)

export default ProfilePageReducer;