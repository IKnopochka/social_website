type LocationPropsType = {
    city: string
    country: string
}
export type UserPropsType = {
    id: number
    name: string
    photos: {
        small : string | null
        large: string | null
    }
    status: string
    location: LocationPropsType
    followed: boolean
}
export type AllUsersPropsType = {
    users: Array<UserPropsType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}

type UsersReducerType = ReturnType<typeof followAC> |
    ReturnType<typeof unfollowAC> |
    ReturnType<typeof setUsersAC> |
    ReturnType<typeof setCurrentPageAC> |
    ReturnType<typeof setTotalCountAC> |
    ReturnType<typeof setToggleIsFetchingAC>

const usersInitialState: AllUsersPropsType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true

}

const UsersReducer = (state: AllUsersPropsType = usersInitialState, action: UsersReducerType): AllUsersPropsType => {
    switch (action.type) {
        case 'FOLLOW':
            return {...state, users: state.users.map(m => m.id === action.id ? {...m, followed: true} : m)}
        case 'UNFOLLOW':
            return {...state, users: state.users.map(m => m.id === action.id ? {...m, followed: false} : m)}
        case 'SET-USERS':
            /*return {...state, users: [...action.users, ...state.users ]}*/
            return {...state, users: [...action.users]}
        case 'SET-CURRENT-PAGE':
            return {...state, currentPage: action.currentPage}
        case 'SET-TOTAL-COUNT':
            return {...state, totalUsersCount: action.totalUsers}
        case 'TOGGLE-IS-FETCHING':
            return {...state, isFetching: action.isFetching}
        default:
            return state
    }
};

export const followAC = (userId: number) => ({type: 'FOLLOW', id: userId} as const)
export const unfollowAC = (userId: number) => ({type: 'UNFOLLOW', id: userId} as const)
export const setUsersAC = (users: Array<UserPropsType>) => ({type: 'SET-USERS', users: users} as const)
export const setCurrentPageAC = (currentPage: number) => ({type: 'SET-CURRENT-PAGE', currentPage: currentPage} as const)
export const setTotalCountAC = (totalUsers: number) => ({type: 'SET-TOTAL-COUNT', totalUsers} as const)
export const setToggleIsFetchingAC = (isFetching: boolean) => ({type: 'TOGGLE-IS-FETCHING', isFetching} as const)

export default UsersReducer;