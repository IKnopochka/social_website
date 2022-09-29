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
}

type UsersReducerType = ReturnType<typeof followAC> |
    ReturnType<typeof unfollowAC> |
    ReturnType<typeof setUsersAC> |
    ReturnType<typeof setCurrentPageAC>

const usersInitialState: AllUsersPropsType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 200,
    currentPage: 40

}

const UsersReducer = (state: AllUsersPropsType = usersInitialState, action: UsersReducerType): AllUsersPropsType => {
    switch (action.type) {
        case 'FOLLOW':
            return {...state, users: state.users.map(m => m.id === action.id ? {...m, followed: true} : m)}
        case 'UNFOLLOW':
            return {...state, users: state.users.map(m => m.id === action.id ? {...m, followed: false} : m)}
        case 'SET-USERS':
            return {...state, users: [...state.users, ...action.users]}
        case 'SET-CURRENT-PAGE':
            return {...state, currentPage: action.currentPage}
        default:
            return state
    }
};

export const followAC = (userId: number) => ({type: 'FOLLOW', id: userId} as const)
export const unfollowAC = (userId: number) => ({type: 'UNFOLLOW', id: userId} as const)
export const setUsersAC = (users: Array<UserPropsType>) => ({type: 'SET-USERS', users: users} as const)
export const setCurrentPageAC = (currentPage: number) => ({type: 'SET-CURRENT-PAGE', currentPage: currentPage} as const)

export default UsersReducer;