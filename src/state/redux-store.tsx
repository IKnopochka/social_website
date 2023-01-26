import {AnyAction, applyMiddleware, combineReducers, legacy_createStore, Store} from "redux";
import ProfilePageReducer, {ProfileActionTypes} from "./profilePageReducer";
import DialogsPageReducer, {DialogActionTypes} from "./dialogsPageReducer";
import SidebarReducer, {SidebarActionType} from "./sidebarReducer";
import UsersReducer, {UsersActionType} from "./usersReducer";
import thunkMiddleware, {ThunkAction, ThunkDispatch} from "redux-thunk"
import {FormAction, reducer as formReducer} from "redux-form"
import {AuthActionTypes, AuthReducer} from "./authReducer";
import {AppActionType, AppReducer} from "./appReducer";

const rootReducer = combineReducers({
    profilePage: ProfilePageReducer,
    dialogsPage: DialogsPageReducer,
    sidebar: SidebarReducer,
    usersPage: UsersReducer,
    auth: AuthReducer,
    form: formReducer,
    app: AppReducer
})
export const store: Store<AppRootStateType> = legacy_createStore(rootReducer, applyMiddleware(thunkMiddleware))

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
