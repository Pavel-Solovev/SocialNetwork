import {addPostAC, changeNewTextAC} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {StoreType} from "../../../redux/redux-store";

const mapStateToProps = (state: StoreType) => {
    const store = state.getState()
    return {
        store: store.profilePage
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


