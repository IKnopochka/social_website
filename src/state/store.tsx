import {ActionTypes,PostsPropsType} from "./profilePageReducer";
import {Store} from "redux";
import {RootReducerType} from "./redux-store";
//StoreType
export type ReduxStorePropsType = {
    store: Store<RootReducerType>
}
//ProfilePage types


export type PostsMapToDispatchPropsType = {
    addPost: (post: string) => void
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
export type DialogsPropsType = {
    dialogs: Array<DialogItemProps>
    messages: Array<MessageItemProps>
}
export type DialogsMapToDispatchPropsType = {
    onAddMessage: (message: string) => void
}
export type DialogsPagePropsType = DialogsMapToDispatchPropsType & DialogsPropsType


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
    dialogsPage: DialogsPropsType
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

export type UpdateNewPostTextType = {
    type: 'UPDATE-NEW-POST-TEXT',
    newText: string
}



//Action Creators

/*let store: StorePropsType = {
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
                {id: 1, name: 'Michael', src: 'https://vjoy.cc/wp-content/uploads/2019/06/27-28.jpg'},
                {id: 2, name: 'Irina', src: 'https://vjoy.cc/wp-content/uploads/2019/06/20-31.jpg'},
                {id: 3, name: 'Kathryn', src: 'https://vjoy.cc/wp-content/uploads/2019/06/4-30.jpg'},
                {id: 4, name: 'Nina', src: 'https://vjoy.cc/wp-content/uploads/2019/06/16-26.jpg'},
                {id: 5, name: 'Alina', src: 'https://vjoy.cc/wp-content/uploads/2019/06/19-27.jpg'}
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
            {id: 1, name: 'Michael', src: 'https://vjoy.cc/wp-content/uploads/2019/06/27-28.jpg'},
            {id: 2, name: 'Irina', src: 'https://vjoy.cc/wp-content/uploads/2019/06/20-31.jpg'},
            {id: 3, name: 'Kathryn', src: 'https://vjoy.cc/wp-content/uploads/2019/06/4-30.jpg'}
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

    dispatch(action) {

        this._state.profilePage = ProfilePageReducer(this._state.profilePage, action)
        this._state.dialogsPage = DialogsPageReducer(this._state.dialogsPage, action)
        this._state.sidebar = SidebarReducer(this._state.sidebar, action)

        this._onChangeRenderTree()
    }
}*/


