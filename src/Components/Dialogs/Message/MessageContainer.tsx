import {addMessageAC, ChangeNewMessageAC} from "../../../redux/dialogs-reducer";
import {Message} from "./Message";
import {connect} from "react-redux";
import {StoreType} from "../../../redux/redux-store";


const mapStateToProps = (state: StoreType) => {
    const store = state.getState()
    return {
        messageData: store.dialogPage,
        newMessageChange: store.dialogPage.newMessageChange
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        onCallbackMessageChange: (title:string) => {
            dispatch(ChangeNewMessageAC(title));
        },
        onCallbackAddMessage: () => {
            dispatch(addMessageAC());
        }
    }
}

export const MessageContainer = connect(mapStateToProps, mapDispatchToProps)(Message);


