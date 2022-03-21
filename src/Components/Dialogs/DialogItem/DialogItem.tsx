import React from 'react';
import {NavLink} from "react-router-dom";
import s from "../Dialogs.module.css";
import {StoreType} from "../../../redux/redux-store";

type PropsType = {
    store:StoreType
}

export const DialogItem: React.FC<PropsType> = (props) => {
    const store = props.store.getState()
    return (
        <div className={s.dialogsItems}>
            {store.dialogPage.dialogsData.map(d => {
                return (<div>
                    <NavLink to={`/Messages/${d.id}`}>{d.name}</NavLink>
                </div>)
            })}
        </div>

    )
}
