import {renderTree} from "../render";

export type DialogItemProps = {
    id: number
    name: string
    src: string
}
export type MessageItemProps = {
    id: number
    message: string
}
export type SidebarItemProps = {
    id: number
    name: string
    src: string
}
export type PostItemType = {
    id: number
    message: string
    likeCount: number
}
export type ConversationsPropsType = {
    dialogs: Array<DialogItemProps>
    messages: Array<MessageItemProps>
}

export type PostsPropsType = {
    posts: Array<PostItemType>
    newPostText: string
    addPost: (message: string) => void
}
export type SidebarPropsType = {
    sidebar: Array<SidebarItemProps>
}

export type AllPropsType = {
    dialogs: Array<DialogItemProps>
    messages: Array<MessageItemProps>
    sidebar: Array<SidebarItemProps>
    posts: Array<PostItemType>
    newPostText: string
}

export type StateProps = {
    state: AllPropsType
    addPost: (message: string) => void
}


export let state = {
    dialogs: [
        {id: 1,  name: 'Michael', src: 'https://vjoy.cc/wp-content/uploads/2019/06/27-28.jpg'},
        {id: 2,  name: 'Irina', src: 'https://vjoy.cc/wp-content/uploads/2019/06/20-31.jpg'},
        {id: 3,  name: 'Kathryn', src: 'https://vjoy.cc/wp-content/uploads/2019/06/4-30.jpg'},
        {id: 4,  name: 'Nina', src: 'https://vjoy.cc/wp-content/uploads/2019/06/16-26.jpg'},
        {id: 5,  name: 'Alina', src: 'https://vjoy.cc/wp-content/uploads/2019/06/19-27.jpg'}
    ],
    messages: [
        {id: 1, message: "Hey"},
        {id: 2, message: "What's up?"},
        {id: 3, message: "not bad. How was your day?"},
        {id: 4, message: "Went to the cinema. "},
    ],
    sidebar: [
        {id: 1,  name: 'Michael', src: 'https://vjoy.cc/wp-content/uploads/2019/06/27-28.jpg'},
        {id: 2,  name: 'Irina', src: 'https://vjoy.cc/wp-content/uploads/2019/06/20-31.jpg'},
        {id: 3,  name: 'Kathryn', src: 'https://vjoy.cc/wp-content/uploads/2019/06/4-30.jpg'}
    ],
    posts: [
        {id: 1, message: 'Hi, how are you', likeCount: 2},
        {id: 2, message: 'It is my first post', likeCount: 5},
        {id: 3, message: 'Welcome!', likeCount: 78}
    ],
    newPostText: 'It_kamasutra'
}

export const addPost = (postMessage : string) => {
    const newPost: PostItemType = {
        id: 9,
        message: postMessage,
        likeCount:0
    }

    state.posts.push(newPost);
    renderTree(state)
}