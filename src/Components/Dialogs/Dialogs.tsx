import React from 'react';
import s from './Dialogs.module.css';
import {DialogItem} from "./DialogItem/DialogItem";
import {MessageContainer} from "./Message/MessageContainer";
import {StoreType} from "../../redux/redux-store";


type PropsType = {
    store:StoreType
}

export const Dialogs:React.FC<PropsType> = (props) => {
    return (
        <div className={s.dialogs}>
            <DialogItem store={props.store}/>
            <MessageContainer
                store={props.store}
                dispatch={props.store.dispatch}
            />
        </div>)
}
