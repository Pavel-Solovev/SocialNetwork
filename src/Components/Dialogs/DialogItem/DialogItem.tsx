import React from 'react';
import {NavLink} from "react-router-dom";
import s from "../Dialogs.module.css";

type dialog = {
    id?: number
    name: string
}

type DialogType = {
    DialogData: dialog[]
}

export const DialogItem: React.FC<DialogType> = (props) => {
    return (
        <div className={s.dialogsItems}>
            {props.DialogData.map(d => {
                return (<div>
                    <NavLink to={`/Messages/${d.id}`}>{d.name}</NavLink>
                </div>)
            })}
        </div>

    )
}
