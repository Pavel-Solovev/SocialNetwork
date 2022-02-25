import React, {ChangeEvent} from "react";
import s from './MyPosts.module.css';
import {Posts} from "./Post/Posts";
import {PostType} from "../Profile";
import {ActionsTypes} from "../../../redux/state";
import {addPostAC, changeNewTextAC} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";

export type Post_contentType = {
    title_post: string
    description_post: PostType[]
    newPostChange: string
    dispatch: (action:ActionsTypes) => void
}


export const MyPostsContainer: React.FC<Post_contentType> = (props) => {

    const addPost = () => {
        props.dispatch(addPostAC())

    }

    const onPostChange = (title:string) => {
        props.dispatch(changeNewTextAC(title))
            }

    return (<MyPosts addPostCallback={addPost}
                     changeNewTextCallback={onPostChange}
                     newPostChange={props.newPostChange}
                     title_post={props.title_post}
                     description_post={props.description_post}/>
    )
}
