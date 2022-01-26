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

type DialogsPropType = {
    dialogs:dialog[]
    message:message[]
}

export const Dialogs:React.FC<DialogsPropType> = (props) => {
    return (
        <div className={s.dialogs}>
            <DialogItem DialogData={props.dialogs}/>
            <Message MessageData={props.message}/>
        </div>)
}
