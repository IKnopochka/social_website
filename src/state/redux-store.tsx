import {combineReducers, createStore, Store} from "redux";
import ProfilePageReducer from "./profilePageReducer";
import DialogsPageReducer from "./dialogsPageReducer";
import SidebarReducer from "./sidebarReducer";

const reducers = combineReducers({
    profilePage: ProfilePageReducer,
    dialogsPage: DialogsPageReducer,
    sidebar: SidebarReducer
})

export type ReducersType =  ReturnType<typeof reducers>

export const store: Store<ReducersType> = createStore(reducers)
console.log('redux store', store)
console.log('redux store get state', store.getState())
console.log('redux store dispatch', store.dispatch)