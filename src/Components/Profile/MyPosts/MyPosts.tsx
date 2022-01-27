import React from "react";
import s from './MyPosts.module.css';
import {Posts} from "./Post/Posts";
import {PostType} from "../Profile";

type ButtonType = {
    button_add: string
    button_remove: string
}
const Button: ButtonType = {
    button_add: 'Add Post',
    button_remove: 'Remove'
}
export type Post_contentType = {
    title_post: string
    description_post: PostType[]
}


export const MyPosts: React.FC<Post_contentType> = (props) => {
    return (<div className={s.postsBlock}>
            <h3><p className={s.title}>{props.title_post}</p></h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>{Button.button_add}</button>
                    <button>{Button.button_remove}</button>
                </div>
            </div>
            <div className={s.posts}>
                <Posts
                    title_post={props.title_post}
                    description_post={props.description_post}
                />
            </div>
        </div>
    )
}
