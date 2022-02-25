import React, {ChangeEvent} from 'react';
import s from "../Dialogs.module.css";
import {ActionsTypes} from "../../../redux/state";
import {addMessageAC, ChangeNewMessageAC} from "../../../redux/dialogs-reducer";
import {Message} from "./Message";

type message = {
    id?: number
    message: string
}

type MessageContainerType = {
    MessageData: message[]
    newMessageChange: string
    dispatch: (action:ActionsTypes) => void
}

export const MessageContainer: React.FC<MessageContainerType> = (props) => {

    const onMessageChange = (title:string) => {
        props.dispatch(ChangeNewMessageAC(title))

    }

    const addMessage = () => {
       props.dispatch(addMessageAC())
    }


    return (<Message MessageData={props.MessageData}
                     newMessageChange={props.newMessageChange}
                     onCallbackMessageChange={onMessageChange}
                     onCallbackAddMessage={addMessage}/>
    )
}
