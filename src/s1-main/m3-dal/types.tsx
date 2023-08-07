
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


