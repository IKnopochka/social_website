
import {Dispatch} from "redux";
import {updateObjectInArray} from "s1-main/m1-ui/utils/object-helpers";
import {usersAPI} from "s1-main/m3-dal/usersAPI";

const usersInitialState = {
    users: [] as Array<UserPropsType>,
    itemsPerPage: 5,
    totalItemsCount: 0,
    currentPage: 1,
    isFetching: true,
    processingInProgress: [] as Array<number>,
    pagesPerPortion: 10
}

const UsersReducer = (state: AllUsersPropsType = usersInitialState, action: UsersActionType): AllUsersPropsType => {
    switch (action.type) {
        case 'FOLLOW':
            // return {...state, users: state.users.map(m => m.id === action.id ? {...m, followed: true} : m)}
            return {...state, users: updateObjectInArray(state.users, 'id', action.id, {followed: true})}
        case 'UNFOLLOW':
            return {...state, users: state.users.map(m => m.id === action.id ? {...m, followed: false} : m)}
        case 'SET-USERS':
            return {...state, users: [...action.users]}
        case 'SET-CURRENT-PAGE':
            return {...state, currentPage: action.currentPage}
        case 'SET-TOTAL-COUNT':
            return {...state, totalItemsCount: action.totalUsers}
        case 'TOGGLE-IS-FETCHING':
            return {...state, isFetching: action.isFetching}
        case 'TOGGLE-PROCESSING-IN-PROGRESS':
            return {
                ...state,
                processingInProgress: action.isProcessing
                    ? [...state.processingInProgress, action.userId]
                    : state.processingInProgress.filter(id => id != action.userId)
            }
        default:
            return state
    }
};

export const follow = (userId: number) => ({type: 'FOLLOW', id: userId} as const)
export const unfollow = (userId: number) => ({type: 'UNFOLLOW', id: userId} as const)
export const setUsers = (users: Array<UserPropsType>) => ({type: 'SET-USERS', users: users} as const)
export const setCurrentPage = (currentPage: number) => ({type: 'SET-CURRENT-PAGE', currentPage: currentPage} as const)
export const setTotalCount = (totalUsers: number) => ({type: 'SET-TOTAL-COUNT', totalUsers} as const)
export const toggleIsFetching = (isFetching: boolean) => ({type: 'TOGGLE-IS-FETCHING', isFetching} as const)
export const toggleButtonInProcess = (isProcessing: boolean, userId: number) => ({
    type: 'TOGGLE-PROCESSING-IN-PROGRESS',
    isProcessing,
    userId
} as const)

//thunk function
export const getUsersThunkCreator = (currentPageNumber: number, pageSize: number) => async (dispatch: Dispatch) => {
    dispatch(setCurrentPage(currentPageNumber))
    dispatch(toggleIsFetching(true))
    const data = await usersAPI.getUsers(currentPageNumber, pageSize)
    dispatch(toggleIsFetching(false))
    dispatch(setUsers(data.items))
    dispatch(setTotalCount(data.totalCount))
}
export const followUserThunkCreator = (id: number) => async (dispatch: Dispatch) => {
    dispatch(toggleButtonInProcess(true, id))
    followUnfollowFlow(dispatch, id, usersAPI.followUser.bind(usersAPI), follow)
}
export const unFollowUserThunkCreator = (id: number) => {
    return async (dispatch: Dispatch) => {
        dispatch(toggleButtonInProcess(true, id))
        followUnfollowFlow(dispatch, id, usersAPI.unfollowUser.bind(usersAPI), unfollow)
    }
}
const followUnfollowFlow = async (dispatch: Dispatch, id: number, apiMethod: (userId: number) => Promise<any> , action: typeof follow | typeof unfollow) => {
    const data = await apiMethod(id)
    if (data.resultCode == 0) {
        dispatch(action(id))
    }
    dispatch(toggleButtonInProcess(false, id))
}

export default UsersReducer;

//types
type LocationPropsType = {
    city: string
    country: string
}
export type UserPropsType = {
    id: number
    name: string
    photos: {
        small: string
        large: string
    }
    status: string
    location?: LocationPropsType
    followed: boolean
}
// export type AllUsersPropsType = {
//     users: Array<UserPropsType>
//     itemsPerPage: number
//     totalItemsCount: number
//     currentPage: number
//     isFetching: boolean
//     processingInProgress: Array<number>
// }
export type AllUsersPropsType = typeof usersInitialState

export type UsersActionType = ReturnType<typeof follow> |
    ReturnType<typeof unfollow> |
    ReturnType<typeof setUsers> |
    ReturnType<typeof setCurrentPage> |
    ReturnType<typeof setTotalCount> |
    ReturnType<typeof toggleIsFetching> |
    ReturnType<typeof toggleButtonInProcess>