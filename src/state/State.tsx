//ProfilePage types
export type PostItemType = {
    id: number
    message: string
    likeCount: number
}
export type PostsPropsType = {
    posts: Array<PostItemType>
    newPostText: string
}
//for Profile and My Posts
export type ProfilePropsType = {
    posts: Array<PostItemType>
    newPostText: string
    dispatch: (action: ActionTypes) => void
}
//dialogsPage types
export type DialogItemProps = {
    id: number
    name: string
    src: string
}
export type MessageItemProps = {
    id: number
    message: string
}
export type DialogsPagePropsType = {
    dialogs: Array<DialogItemProps>
    messages: Array<MessageItemProps>
    newMessageText: string
}
//SideBar Types
export type SidebarItemProps = {
    id: number
    name: string
    src: string
}
export type SidebarPropsType = {
    sidebar: Array<SidebarItemProps>
}
//State Props
export type StatePropsType = {
    profilePage: PostsPropsType
    dialogsPage: DialogsPagePropsType
    sidebar: Array<SidebarItemProps>
}
//state Props separately
export type StorePropsType = {
    _state: StatePropsType,
    _onChangeRenderTree: () => void,

    subscribe: (observer: () => void) => void,
    getState: () => void

    dispatch: (action: ActionTypes) => void

}
//store props types summary
export type StateProps = {
    store: StorePropsType
}

//Dispatch Types

type UpdateNewPostTextType = {
    type: 'UPDATE-NEW-POST-TEXT',
    newText: string
}
export type ActionTypes = ReturnType<typeof AddPostActionCreator> |
    UpdateNewPostTextType |
    ReturnType<typeof AddMessageActionCreator> |
    ReturnType<typeof UpdateMessageActionCreator>

//Action Creators
export const AddPostActionCreator = () =>  {
    return {type: 'ADD-POST'} as const
}
export const UpdateNewPostTextActionCreator = (text:string):UpdateNewPostTextType  => (
    {type: 'UPDATE-NEW-POST-TEXT', newText: text} as const
)
export const AddMessageActionCreator = (message: string) =>  ({type: 'UPDATE-NEW-MESSAGE-TEXT', newMessage: message} as const)
export const UpdateMessageActionCreator = () =>  ({type: 'SEND-MESSAGE'} as const)



export let store: StorePropsType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you', likeCount: 2},
                {id: 2, message: 'It is my first post', likeCount: 5},
                {id: 3, message: 'Welcome!', likeCount: 78}
            ],
            newPostText: 'It_kamasutra'
        },
        dialogsPage: {
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
            newMessageText: ""
        },
        sidebar: [
            {id: 1,  name: 'Michael', src: 'https://vjoy.cc/wp-content/uploads/2019/06/27-28.jpg'},
            {id: 2,  name: 'Irina', src: 'https://vjoy.cc/wp-content/uploads/2019/06/20-31.jpg'},
            {id: 3,  name: 'Kathryn', src: 'https://vjoy.cc/wp-content/uploads/2019/06/4-30.jpg'}
        ],

    },
    _onChangeRenderTree() {
        console.log("state is changed")
    },
    subscribe(observer: () => void) {
        this._onChangeRenderTree = observer;
    },
    getState() {
        return this._state;
    },

    dispatch (action) {
        if (action.type === 'ADD-POST') {
            const newPost: PostItemType = {
                id: 9,
                message: this._state.profilePage.newPostText,
                likeCount:0
            }
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._onChangeRenderTree()
        } else if (action.type === 'UPDATE-NEW-POST-TEXT'){
            this._state.profilePage.newPostText = action.newText;
            this._onChangeRenderTree()
        } else if (action.type === 'UPDATE-NEW-MESSAGE-TEXT') {
            this._state.dialogsPage.newMessageText = action.newMessage;
            this._onChangeRenderTree()
        } else if (action.type === 'SEND-MESSAGE') {
            const newTextMessage: MessageItemProps = {
                id:7,
                message: this._state.dialogsPage.newMessageText
            }
            this._state.dialogsPage.messages.push(newTextMessage)
            this._state.dialogsPage.newMessageText = '';
            this._onChangeRenderTree()
        }
    }
}

