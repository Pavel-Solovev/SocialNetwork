import {addPostAC, changeNewTextAC} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {RootStateType} from "../../../redux/state";

const mapStateToProps = (state: RootStateType) => {
    return {
        store: state.profilePage
    }
}

const mapDispatchToProps = (dispatch:any) => {
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


