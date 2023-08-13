import {AnyAction, applyMiddleware, combineReducers, legacy_createStore, Store, compose } from "redux";
import {ProfileActionTypes, profileReducer} from "s1-main/m2-bll/profile-reducer";
import thunkMiddleware, {ThunkAction, ThunkDispatch} from "redux-thunk"
import {FormAction, reducer as formReducer} from "redux-form"
import {AuthActionTypes, AuthReducer} from "s1-main/m2-bll/authReducer";
import {AppActionType, AppReducer} from "s1-main/m2-bll/appReducer";
import { composeWithDevTools } from '@redux-devtools/extension';
import { useDispatch} from "react-redux";
import {DialogActionTypes, MessageReducer} from "s1-main/m2-bll/message-reducer";
import SidebarReducer, {SidebarActionType} from "s1-main/m2-bll/sidebarReducer";
import UsersReducer, {UsersActionType} from "s1-main/m2-bll/users-reducer";

const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: MessageReducer,
    sidebar: SidebarReducer,
    usersPage: UsersReducer,
    auth: AuthReducer,
    form: formReducer,
    app: AppReducer
})
//export const store: Store<AppRootStateType> = legacy_createStore(rootReducer, applyMiddleware(thunkMiddleware))
export const store: Store<AppRootStateType> = legacy_createStore(rootReducer, composeWithDevTools(applyMiddleware(thunkMiddleware)));

//export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector
export const useAppDispatch = () => useDispatch<AppThunkDispatch>();

export type AppThunkDispatch = ThunkDispatch<AppRootStateType, any, AnyAction>

//types
export type AppRootStateType = ReturnType<typeof rootReducer>
export type ActionTypes = AuthActionTypes
    | ProfileActionTypes
    | UsersActionType
    | DialogActionTypes
    | SidebarActionType
    | FormAction
    | AppActionType
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppRootStateType, unknown, ActionTypes>
//export type AppThunk = ThunkDispatch<AppRootStateType, any, AnyAction>
/*export type ReduxStorePropsType = {
    store: Store<AppRootStateType>
}*/
export type AppDispatch = typeof store.dispatch

// @ts-ignore
window.store = store //StoreType
