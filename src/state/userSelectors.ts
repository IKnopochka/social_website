import {AppRootStateType} from "./redux-store";
import {createSelector} from "reselect";

// export const getUsersSelectorFake = (state: AppRootStateType) => {
//     return state.usersPage.users.filter(u => true)
// }

const getUsersHelpFunction = (state: AppRootStateType) => {
    return state.usersPage.users
}

export const getUsersSelectorFake = createSelector(getUsersHelpFunction, (users) => {
    return users.filter(u => true)
})

