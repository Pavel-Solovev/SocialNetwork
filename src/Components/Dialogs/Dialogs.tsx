import React from 'react';
import s from './Dialogs.module.css';
import {MessageContainer} from "./Message/MessageContainer";



export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <MessageContainer />
        </div>)
}
