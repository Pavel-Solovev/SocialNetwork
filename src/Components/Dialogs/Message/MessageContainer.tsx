import {addMessageAC, ChangeNewMessageAC} from "../../../redux/dialogs-reducer";
import {Message} from "./Message";
import {connect} from "react-redux";
import {RootStateType} from "../../../redux/state";


const mapStateToProps = (state: RootStateType) => {
    return {
        messageData: state.dialogPage,
        newMessageChange: state.dialogPage.newMessageChange
    }
}

const mapDispatchToProps = (dispatch: any) => {
    debugger
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


