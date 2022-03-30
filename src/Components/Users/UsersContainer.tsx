import React from 'react';
import {connect} from "react-redux";
import {StoreType} from "../../redux/redux-store";
import {Users} from "./Users";
import {followUnfollowAC, setUsersAC, UsersDataType, UsersType} from "../../redux/users-reducer";
import {Dispatch} from "redux";

type mapStatePropsType = {
    usersPage: UsersDataType
}

const mapStateToProps = (state: StoreType): mapStatePropsType => {
    return {
        usersPage: state.userPage
    }
}

type mapDispatchPropsType = {
    onCallbackFollowUnfollow: (userId: number) => void
    onCallbackSetUsers: (users: UsersType[]) => void
}

export type UsersPropsType = mapStatePropsType & mapDispatchPropsType

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchPropsType => {
    return {
        onCallbackFollowUnfollow: (userId: number) => {
            dispatch(followUnfollowAC(userId))
        },
        onCallbackSetUsers: (users: UsersType[]) => {
            dispatch(setUsersAC(users))
        }

    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)