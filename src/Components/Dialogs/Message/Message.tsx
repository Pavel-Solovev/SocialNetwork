import React, {ChangeEvent} from 'react';
import s from "../Dialogs.module.css";
import {ActionsTypes} from "../../../redux/state";
import {addMessageAC, ChangeNewMessageAC} from "../../../redux/dialogs-reducer";

type message = {
    id?: number
    message: string
}

type MessageData = {
    MessageData: message[]
    newMessageChange: string
    dispatch: (action:ActionsTypes) => void
}

export const Message: React.FC<MessageData> = (props) => {
    const NewMessageText = React.useRef<HTMLTextAreaElement>(null)

    const onMessageChange = (e:ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(ChangeNewMessageAC(e.currentTarget.value))

    }

    const addMessage = () => {
       props.dispatch(addMessageAC())
    }


    return (
        <div className={s.message}>
            {props.MessageData.map(m => {
                return (<div>
                    <div>{m.message}</div>
                </div>)
            })
            }
            <div>
                <textarea value={props.newMessageChange} onChange={onMessageChange} ref={NewMessageText}/>
            </div>
            <div>
                <button onClick={addMessage}>addMessage</button>
            </div>
        </div>
    )
}
