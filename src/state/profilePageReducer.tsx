import React from 'react';
import {ActionTypes, PostItemType, PostsPropsType} from "./State";

const ProfilePageReducer = (state: PostsPropsType, action: ActionTypes) => {
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



export default ProfilePageReducer;