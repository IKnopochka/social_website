import React from 'react';
import {ActionTypes, PostItemType, PostsPropsType, UpdateNewPostTextType} from "./store";

const initialState: PostsPropsType = {
    posts: [
        {id: 1, message: 'Hi, how are you', likeCount: 2},
        {id: 2, message: 'It is my first post', likeCount: 5},
        {id: 3, message: 'Welcome!', likeCount: 78}
    ],
    newPostText: 'It_kamasutra'
}

const ProfilePageReducer = (state: PostsPropsType = initialState, action: ActionTypes) => {
    switch (action.type) {
        case ('ADD-POST'):
            const newPost: PostItemType = {
                id: 9,
                message: state.newPostText,
                likeCount: 0
            }
            state.posts.push(newPost);
            state.newPostText = '';
            return state;

        case ('UPDATE-NEW-POST-TEXT'):
            state.newPostText = action.newText;
            return state;
        default:
            return state
    }
};

//Action Creators
export const AddPostActionCreator = () =>  {
    return {type: 'ADD-POST'} as const
}
export const UpdateNewPostTextActionCreator = (text:string):UpdateNewPostTextType  => (
    {type: 'UPDATE-NEW-POST-TEXT', newText: text} as const
)

export default ProfilePageReducer;