import {ActionsTypes} from "./redux-store";

let initialState = {
        dialogsData: [
            {id: 1, name: 'Name 1'},
            {id: 2, name: 'Name 2'},
            {id: 3, name: 'Name 3'},
            {id: 4, name: 'Name 4'},
            {id: 5, name: 'Name 5'},
            {id: 6, name: 'Name 6'}
        ],
        messagesData: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How are you?'},
            {id: 3, message: 'Check this!'},
            {id: 4, message: '*smile*'},
            {id: 5, message: '*smile*'},
        ],
        newMessageChange: ''

}

export type DialogPageType = typeof initialState

export type DialogDataType = typeof initialState.dialogsData[0]

export type MessagesDataType = typeof initialState.messagesData[0]

export type MessageActionsTypes =
    ReturnType<typeof addMessageAC> |
    ReturnType<typeof ChangeNewMessageAC>

export const addMessageAC = () => {
    return {
        type: 'ADD-MESSAGE'
    } as const
}

export const ChangeNewMessageAC = (newText: string) => {
    return {
        type: 'CHANGE-NEW-MESSAGE',
        newText: newText
    } as const
}

export const DialogsReducer = (state:DialogPageType = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case ('ADD-MESSAGE'): {
            const newMessage: MessagesDataType = {
                id: new Date().getTime()!,
                message: state.newMessageChange
            }
            return {
                ...state,
                messagesData: [...state.messagesData, newMessage],
                newMessageChange: ''
            };
        }
        case ('CHANGE-NEW-MESSAGE'): {
            return {
                ...state,
                newMessageChange: action.newText
            };
        }

        default:
            return state
    }
}