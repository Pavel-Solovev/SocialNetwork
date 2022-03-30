import {combineReducers, createStore} from "redux";
import {ProfileActionsTypes, ProfileReducer} from "./profile-reducer";
import {DialogsReducer, MessageActionsTypes} from "./dialogs-reducer";
import {SidebarReducer} from "./sidebar-reducer";
import {UsersActionsTypes, usersReducer} from "./users-reducer";

export type ActionsTypes = ProfileActionsTypes | MessageActionsTypes | UsersActionsTypes

const rootReducer = combineReducers({
    profilePage: ProfileReducer,
    dialogPage: DialogsReducer,
    userPage: usersReducer,
    sidebar: SidebarReducer
})

export type StoreType = ReturnType<typeof rootReducer>;
export const store = createStore(rootReducer)
