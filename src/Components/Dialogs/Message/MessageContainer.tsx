import React from 'react';
import {ActionsTypes} from "../../../redux/state";
import {addMessageAC, ChangeNewMessageAC} from "../../../redux/dialogs-reducer";
import {Message} from "./Message";
import {StoreType} from "../../../redux/redux-store";

type PropsType = {
    store:StoreType
    dispatch: (action:ActionsTypes) => void
}


export const MessageContainer: React.FC<PropsType> = (props) => {

    const store = props.store.getState()

    const onMessageChange = (title:string) => {
        props.dispatch(ChangeNewMessageAC(title))

    }

    const addMessage = () => {
       props.dispatch(addMessageAC())
    }


    return (<Message MessageData={store.dialogPage.messagesData}
                     newMessageChange={store.dialogPage.newMessageChange}
                     onCallbackMessageChange={onMessageChange}
                     onCallbackAddMessage={addMessage}/>
    )
}
