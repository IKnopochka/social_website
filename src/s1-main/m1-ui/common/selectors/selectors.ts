import {AppRootStateType} from "s1-main/m3-dal/store";
import {createSelector} from "reselect";
import defaultProfile from 's1-main/m1-ui/images/defaultProfileImage.png'

const getUsersHelpFunction = (state: AppRootStateType) => state.usersPage.users

export const getUsersSelectorFake = createSelector(getUsersHelpFunction, (users) => {
    return users.filter(u => true)
})


//profile
export const avatarSelector = (state: AppRootStateType) => state.profilePage.profile.photos.small

