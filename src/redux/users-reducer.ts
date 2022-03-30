import {ActionsTypes} from "./redux-store";

export type UsersType = {
    user_id: number
    photoUrl:string
    fullName: string
    followed: boolean
    status: string
    location:{
        city: string
        country: string
    }
}

const initialState = {
    users: [] as UsersType[]
}

export type UsersDataType = typeof initialState

export type UsersActionsTypes = ReturnType<typeof followUnfollowAC> |
    ReturnType<typeof setUsersAC>


export const followUnfollowAC = (userId:number) => {
    return {
        type: 'FOLLOW-UNFOLLOW',
        userId: userId
    } as const
}

export const  setUsersAC = (users: UsersType[]) => {
    return {
        type: 'SET-USERS',
        users: users
    } as const
}

export const usersReducer = (state: UsersDataType = initialState, action: ActionsTypes): UsersDataType => {
    switch (action.type) {
        case 'FOLLOW-UNFOLLOW': {
            return{
                ...state,
                users: state.users.map(u => u.user_id === action.userId ? {...u, followed: !u.followed} : u)
            }
        }
        case 'SET-USERS': {
            return{
                    ...state,
                users: [...state.users, ...action.users]
            }
        }
        default:
            return state
    }

}