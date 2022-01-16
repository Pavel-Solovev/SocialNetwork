import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

type DialogType = {
    name: string,
    id: number
}

type MessageType = {
    message: string
}

const DialogItem: React.FC<DialogType> = (props) => {
    return <div className={s.dialog}>
        <NavLink to={`/Messages/${props.id}`}>{props.name}</NavLink>
    </div>
}

const Message: React.FC<MessageType> = (props) => {
    return (
        <div className={s.message}>{props.message}</div>)
}


export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>

                <DialogItem name={'Name 1'} id={1}/>
                <DialogItem name={'Name 2'} id={2}/>
                <DialogItem name={'Name 3'} id={3}/>
                <DialogItem name={'Name 4'} id={4}/>
                <DialogItem name={'Name 5'} id={5}/>
                <DialogItem name={'Name 6'} id={6}/>

            </div>
            <div className={s.messages}>
                <Message message={'Hi'}/>
                <Message message={'How are you?'}/>
                <Message message={'Check this!'}/>
                <Message message={'*smile*'}/>

            </div>
        </div>)
}
