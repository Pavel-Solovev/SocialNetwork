import React, {ChangeEvent} from 'react';
import s from "../Dialogs.module.css";
import {DialogItem} from "../DialogItem/DialogItem";
import {DialogPageType} from "../../../redux/state";


type MessageData = {
    messageData: DialogPageType
    newMessageChange: string
    onCallbackMessageChange: (title:string)=> void
    onCallbackAddMessage: ()=> void
}

export const Message: React.FC<MessageData> = (props) => {
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
            <DialogItem DialogsDataType={props.messageData.dialogsData}/>
        </div>
        <div className={s.message}>
            {props.messageData.messagesData.map(m => {
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
        </>
    )
}
