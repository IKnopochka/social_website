import React from 'react';
import {SidebarItemProps} from "./store";
import {ProfileActionTypes} from "./profilePageReducer";

const initialState: Array<SidebarItemProps>= [
    {id: 1,  name: 'Michael', src: 'https://vjoy.cc/wp-content/uploads/2019/06/27-28.jpg'},
    {id: 2,  name: 'Irina', src: 'https://vjoy.cc/wp-content/uploads/2019/06/20-31.jpg'},
    {id: 3,  name: 'Kathryn', src: 'https://vjoy.cc/wp-content/uploads/2019/06/4-30.jpg'}
]

export type SidebarActionType = ProfileActionTypes

const SidebarReducer = (state: Array<SidebarItemProps> = initialState, action: SidebarActionType): Array<SidebarItemProps> => {
    return state
};

export default SidebarReducer;