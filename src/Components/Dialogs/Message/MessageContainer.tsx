import {addMessageAC, ChangeNewMessageAC, DialogPageType} from "../../../redux/dialogs-reducer";
import {Message} from "./Message";
import {connect} from "react-redux";
import {StoreType} from "../../../redux/redux-store";
import {Dispatch} from "redux";
import {UsersType} from "../../../redux/users-reducer";

type mapStatePropsType = {
    dialogPage:DialogPageType
}


const mapStateToProps = (state: StoreType): mapStatePropsType => {
    return {
        dialogPage: state.dialogPage
    }
}

type mapDispatchPropsType = {
    onCallbackMessageChange: (title: string) => void
    onCallbackAddMessage: () => void
}

export type MessagePropsType = mapStatePropsType & mapDispatchPropsType

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchPropsType => {
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


