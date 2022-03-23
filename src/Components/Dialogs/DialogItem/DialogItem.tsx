import React from 'react';
import {NavLink} from "react-router-dom";
import s from "../Dialogs.module.css";
import {StoreType} from "../../../redux/redux-store";
import {DialogsDataType, RootStateType} from "../../../redux/state";

type PropsType = {
    DialogsDataType:DialogsDataType[]
}

export const DialogItem: React.FC<PropsType> = (props) => {
    return (
        <div className={s.dialogsItems}>
            {props.DialogsDataType.map(d => {
                return (<div>
                    <NavLink to={`/Messages/${d.id}`}>{d.name}</NavLink>
                </div>)
            })}
        </div>

    )
}
