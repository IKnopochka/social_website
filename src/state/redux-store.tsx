import {combineReducers,  legacy_createStore, Store} from "redux";
import ProfilePageReducer from "./profilePageReducer";
import DialogsPageReducer from "./dialogsPageReducer";
import SidebarReducer from "./sidebarReducer";
import UsersReducer from "./usersReducer";

const rootReducer = combineReducers({
    profilePage: ProfilePageReducer,
    dialogsPage: DialogsPageReducer,
    sidebar: SidebarReducer,
    usersPage: UsersReducer
})

export type RootReducerType =  ReturnType<typeof rootReducer>

export const store: Store<RootReducerType> = legacy_createStore(rootReducer)

// @ts-ignore
window.store = store