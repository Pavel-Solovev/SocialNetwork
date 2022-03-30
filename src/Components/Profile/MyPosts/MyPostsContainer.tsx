import {addPostAC, changeNewTextAC, ProfileDataType} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {StoreType} from "../../../redux/redux-store";
import {Dispatch} from "redux";

type mapStatePropsType = {
    profileData: ProfileDataType
}

const mapStateToProps = (state: StoreType): mapStatePropsType => {
    return {
        profileData: state.profilePage
    }
}

type mapDispatchPropsType = {
    addPostCallback: () => void
    changeNewTextCallback: (title:string) => void
}

export type MyPostsType = mapStatePropsType & mapDispatchPropsType

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchPropsType => {
    return {
        addPostCallback: () => {
            dispatch(addPostAC());
        },
        changeNewTextCallback: (title:string) => {
            dispatch(changeNewTextAC(title));
        }
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);


