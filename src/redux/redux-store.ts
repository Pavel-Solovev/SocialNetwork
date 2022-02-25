import {combineReducers, createStore} from "redux";
import {ProfileReducer} from "./profile-reducer";
import {DialogsReducer} from "./dialogs-reducer";
import {SidebarReducer} from "./sidebar-reducer";

const reducers = combineReducers({
    profilePage: ProfileReducer,
    dialogPage: DialogsReducer,
    SidebarReducer
})

export let store = createStore(reducers)
export type StoreType = typeof store;