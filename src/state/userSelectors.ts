import {AppRootStateType} from "./redux-store";

export const getUsersSelector = (state: AppRootStateType) => {
    return state.usersPage.users
}