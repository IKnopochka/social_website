type LocationPropsType = {
    city: string
    country: string
}
export type UserPropsType = {
    id: number
    name: string
    src: string
    status: string
    location: LocationPropsType
    followed: boolean
}
export type AllUsersPropsType = {
    users: Array<UserPropsType>
}

type UsersReducerType = ReturnType<typeof followAC> |
    ReturnType<typeof unfollowAC> |
    ReturnType<typeof setUsersAC>

const usersInitialState: AllUsersPropsType = {
    users: [

    ]

}

const UsersReducer = (state: AllUsersPropsType = usersInitialState, action: UsersReducerType): AllUsersPropsType => {
    switch (action.type) {
        case 'FOLLOW':
            return {...state, users: state.users.map(m => m.id === action.id ? {...m, followed: true} : m)}
        case 'UNFOLLOW':
            return {...state, users: state.users.map(m => m.id === action.id ? {...m, followed: false} : m)}
        case 'SET-USERS':
            return {...state, users: [...state.users, ...action.users]}
        default:
            return state
    }
};

export const followAC = (userId: number) => ({type: 'FOLLOW', id: userId} as const)
export const unfollowAC = (userId: number) => ({type: 'UNFOLLOW', id: userId} as const)
export const setUsersAC = (users: Array<UserPropsType>) => ({type: 'SET-USERS', users: users} as const)

export default UsersReducer;