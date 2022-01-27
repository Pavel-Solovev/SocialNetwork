import React from 'react';
import s from './Dialogs.module.css';
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";




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
}

type dialogData = {
    dialogPage: DialogDataType
}

export const Dialogs:React.FC<dialogData> = (props) => {
    return (
        <div className={s.dialogs}>
            <DialogItem DialogData={props.dialogPage.dialogsData}/>
            <Message MessageData={props.dialogPage.messagesData}/>
        </div>)
}
