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
    processingInProgress: Array<number>
}

type UsersReducerType = ReturnType<typeof follow> |
    ReturnType<typeof unfollow> |
    ReturnType<typeof setUsers> |
    ReturnType<typeof setCurrentPage> |
    ReturnType<typeof setTotalCount> |
    ReturnType<typeof toggleIsFetching> |
    ReturnType<typeof toggleButtonInProcess>

const usersInitialState: AllUsersPropsType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    processingInProgress: []
}

const UsersReducer = (state: AllUsersPropsType = usersInitialState, action: UsersReducerType): AllUsersPropsType => {
    switch (action.type) {
        case 'FOLLOW':
            return {...state, users: state.users.map(m => m.id === action.id ? {...m, followed: true} : m)}
        case 'UNFOLLOW':
            return {...state, users: state.users.map(m => m.id === action.id ? {...m, followed: false} : m)}
        case 'SET-USERS':
            return {...state, users: [...action.users]}
        case 'SET-CURRENT-PAGE':
            return {...state, currentPage: action.currentPage}
        case 'SET-TOTAL-COUNT':
            return {...state, totalUsersCount: action.totalUsers}
        case 'TOGGLE-IS-FETCHING':
            return {...state, isFetching: action.isFetching}
        case 'TOGGLE-PROCESSING-IN-PROGRESS':
            return {...state,
                processingInProgress: action.isProcessing
                    ? [...state.processingInProgress, action.userId]
                    : state.processingInProgress.filter(id => id != action.userId)}
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
export const toggleButtonInProcess = (isProcessing: boolean, userId: number) => ({type: 'TOGGLE-PROCESSING-IN-PROGRESS', isProcessing, userId}as const)

export default UsersReducer;