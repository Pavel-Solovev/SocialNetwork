import React from 'react';
import {NavLink} from "react-router-dom";
import s from "../Dialogs.module.css";
import {DialogsDataType} from "../../../redux/state";

type PropsType = {
    DialogsDataType:DialogsDataType[]
}

export const DialogItem: React.FC<PropsType> = (props) => {
    return (
        <div className={s.dialogsItems}>
            {props.DialogsDataType.map(d => {
                return (<div key={d.id}>
                    <NavLink to={`/Messages/${d.id}`}>{d.name}</NavLink>
                </div>)
            })}
        </div>

    )
}
