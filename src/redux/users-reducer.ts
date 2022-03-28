import {ActionsTypes} from "./redux-store";


const initialState = {
    users: [
        {
            user_id: 1,
            fullName: 'name 1',
            followed: true,
            status: '34g',
            location: {
                city: 'Minsk',
                country: 'Belarus'
            }
        },
        {
            user_id: 1,
            fullName: 'name 2',
            followed: false,
            status: '12',
            location: {
                city: 'Kiev',
                country: 'Ukraine'
            }
        },
        {
            user_id: 1,
            fullName: 'name 3',
            followed: true,
            status: 'sdf',
            location: {
                city: 'Moscow',
                country: 'Russia'
            }
        },

    ]
}

export type UsersType = typeof initialState.users

export type UsersDataType = typeof initialState

export type UsersActionsTypes = ReturnType<typeof followUnfollowAC> |
    ReturnType<typeof setUsersAC>


export const followUnfollowAC = (user_id:number) => {
    return {
        type: 'FOLLOW-UNFOLLOW',
        user_id: user_id
    } as const
}

export const  setUsersAC = (users:UsersType) => {
    return {
        type: 'SET-USERS',
        users: users
    } as const
}

export const usersReducer = (state: UsersDataType = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case 'FOLLOW-UNFOLLOW': {
            return{
                ...state,
                users: state.users.map(u => u.user_id === action.user_id ? {...u, followed: !u.followed} : u)
            }
        }
        case 'SET-USERS': {
            return{
                ...state,
                users: [...state.users, action.users]
            }
        }
        default:
            return state
    }

}