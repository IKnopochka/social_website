import {applyMiddleware, combineReducers, legacy_createStore, Store} from "redux";
import ProfilePageReducer from "./profilePageReducer";
import DialogsPageReducer from "./dialogsPageReducer";
import SidebarReducer from "./sidebarReducer";
import UsersReducer from "./usersReducer";
import {AuthReducer} from "./authReducer";
import thunkMiddleware from "redux-thunk"

const rootReducer = combineReducers({
    profilePage: ProfilePageReducer,
    dialogsPage: DialogsPageReducer,
    sidebar: SidebarReducer,
    usersPage: UsersReducer,
    auth: AuthReducer
})

export type RootReducerType =  ReturnType<typeof rootReducer>

export const store: Store<RootReducerType> = legacy_createStore(rootReducer, applyMiddleware(thunkMiddleware))

// @ts-ignore
window.store = store