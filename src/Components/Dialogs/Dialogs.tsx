import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

let dialogsData: DialogType[] = [
    {id: 1, name: 'Name 1'},
    {id: 2, name: 'Name 2'},
    {id: 3, name: 'Name 3'},
    {id: 4, name: 'Name 4'},
    {id: 5, name: 'Name 5'},
    {id: 6, name: 'Name 6'}
]

let messageData: MessageType[] = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How are you?'},
    {id: 3, message: 'Check this!'},
    {id: 4, message: '*smile*'},
    {id: 5, message: '*smile*'},
]


type DialogType = {
    id?: number
    name: string
}

type MessageType = {
    id?: number
    message: string
}

type typePosts = {
    DialogType:DialogType[]
    MessageType:MessageType[]
}

const DialogItem: React.FC<DialogType> = (props) => {
    return (<div>
        <NavLink to={`/Messages/${props.id}`}>{props.name}</NavLink>
    </div>)
}

const Message: React.FC<MessageType> = (props) => {
    return (
        <div>{props.message}</div>)
}


export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsData.map(d => {
                    return (<div>
                        <DialogItem name={d.name} id={d.id}/>
                            </div>)})}
            </div>
            <div className={s.messages}>
                {messageData.map(m => {
                    return (<div>
                        <Message message={m.message} id={m.id}/>
                            </div>)})
                }
            </div>
        </div>)
}
