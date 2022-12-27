import {applyMiddleware, combineReducers, legacy_createStore, Store} from "redux";
import ProfilePageReducer, {ProfileActionTypes} from "./profilePageReducer";
import DialogsPageReducer, {DialogActionTypes} from "./dialogsPageReducer";
import SidebarReducer, {SidebarActionType} from "./sidebarReducer";
import UsersReducer, {UsersActionType} from "./usersReducer";
import {AuthActionTypes, AuthReducer} from "./authReducer";
import thunkMiddleware, {ThunkAction} from "redux-thunk"
import {FormAction, reducer as formReducer} from "redux-form"

const rootReducer = combineReducers({
    profilePage: ProfilePageReducer,
    dialogsPage: DialogsPageReducer,
    sidebar: SidebarReducer,
    usersPage: UsersReducer,
    auth: AuthReducer,
    form: formReducer
})

export type RootReducerType = ReturnType<typeof rootReducer>
export type AppActionsType = AuthActionTypes
    | ProfileActionTypes
    | UsersActionType
    | DialogActionTypes
    | SidebarActionType
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootReducerType, FormAction, AppActionsType>

export const store: Store<RootReducerType> = legacy_createStore(rootReducer, applyMiddleware(thunkMiddleware))

// @ts-ignore
window.store = store