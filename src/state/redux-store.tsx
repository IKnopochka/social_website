import {AnyAction, applyMiddleware, combineReducers, legacy_createStore, Store, compose } from "redux";
import profileReducer, {ProfileActionTypes} from "./profile-reducer";
import DialogsPageReducer, {DialogActionTypes} from "./dialogsPageReducer";
import SidebarReducer, {SidebarActionType} from "./sidebarReducer";
import UsersReducer, {UsersActionType} from "./users-reducer";
import thunkMiddleware, {ThunkAction, ThunkDispatch} from "redux-thunk"
import {FormAction, reducer as formReducer} from "redux-form"
import {AuthActionTypes, AuthReducer} from "./authReducer";
import {AppActionType, AppReducer} from "./appReducer";
import { composeWithDevTools } from '@redux-devtools/extension';

const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: DialogsPageReducer,
    sidebar: SidebarReducer,
    usersPage: UsersReducer,
    auth: AuthReducer,
    form: formReducer,
    app: AppReducer
})
//export const store: Store<AppRootStateType> = legacy_createStore(rootReducer, applyMiddleware(thunkMiddleware))

export const store: Store<AppRootStateType> = legacy_createStore(rootReducer, composeWithDevTools(applyMiddleware(thunkMiddleware)));


//types
export type AppRootStateType = ReturnType<typeof rootReducer>
export type AllActionsType = AuthActionTypes
    | ProfileActionTypes
    | UsersActionType
    | DialogActionTypes
    | SidebarActionType
    | FormAction
    | AppActionType
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppRootStateType, unknown, AllActionsType>
//export type AppThunk = ThunkDispatch<AppRootStateType, any, AnyAction>
/*export type ReduxStorePropsType = {
    store: Store<AppRootStateType>
}*/


// @ts-ignore
window.store = store //StoreType
