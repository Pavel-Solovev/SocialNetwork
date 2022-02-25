import React from 'react';
import s from './Dialogs.module.css';
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {ActionsTypes} from "../../redux/state";




type dialog = {
    id?: number
    name: string
}

type message = {
    id?: number
    message: string
}

type DialogDataType = {
    dialogsData:dialog[]
    messagesData:message[]
    newMessageChange: string
}

type dialogData = {
    dialogPage: DialogDataType
    dispatch: (action:ActionsTypes) => void
}

export const Dialogs:React.FC<dialogData> = (props) => {
    return (
        <div className={s.dialogs}>
            <DialogItem DialogData={props.dialogPage.dialogsData}/>
            <Message MessageData={props.dialogPage.messagesData}
                     newMessageChange={props.dialogPage.newMessageChange}
                     dispatch={props.dispatch}/>
        </div>)
}
