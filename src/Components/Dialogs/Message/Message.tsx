import React, {ChangeEvent} from 'react';
import s from "../Dialogs.module.css";
import {DialogItem} from "../DialogItem/DialogItem";
import {MessagePropsType} from "./MessageContainer";

export const Message: React.FC<MessagePropsType> = (props) => {

    const NewMessageText = React.useRef<HTMLTextAreaElement>(null)

    const onMessageChange = (e:ChangeEvent<HTMLTextAreaElement>) => {
        props.onCallbackMessageChange(e.currentTarget.value)
    }

    const addMessage = () => {
       props.onCallbackAddMessage()
    }

    return (
        <>
        <div>
            <DialogItem DialogsDataType={props.dialogPage.dialogsData}/>
        </div>
        <div className={s.message}>
            {props.dialogPage.messagesData.map(m => {
                return (<div key={m.id}>
                    <div>{m.message}</div>
                </div>)
            })
            }
            <div>
                <textarea value={props.dialogPage.newMessageChange} onChange={onMessageChange} ref={NewMessageText}/>
            </div>
            <div>
                <button onClick={addMessage}>addMessage</button>
            </div>
        </div>
        </>
    )
}
