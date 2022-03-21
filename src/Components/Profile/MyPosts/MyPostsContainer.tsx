import React from "react";
import {addPostAC, changeNewTextAC} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {StoreType} from "../../../redux/redux-store";



type PropsType = {
    store: StoreType
}



export const MyPostsContainer: React.FC<PropsType> = (props) => {

    const addPost = () => {
        props.store.dispatch(addPostAC())

    }

    const onPostChange = (title:string) => {
        props.store.dispatch(changeNewTextAC(title))
            }

    return (<MyPosts addPostCallback={addPost}
                     changeNewTextCallback={onPostChange}
                     store ={props.store}
        />
    )
}
