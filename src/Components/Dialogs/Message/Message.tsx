import React from 'react';
import s from "../Dialogs.module.css";

type message = {
    id?: number
    message: string
}

type MessageData = {
    MessageData: message[]
}

export const Message: React.FC<MessageData> = (props) => {
    return (
        <div className={s.message}>
            {props.MessageData.map(m => {
                return (<div>
                    <div>{m.message}</div>
                </div>)
            })}
        </div>
    )
}
