import React from "react";
import s from './MyPosts.module.css';
import {Posts} from "./Post/Posts";

type ButtonType = {
    button_add: string
    button_remove: string
}

const Button = {
    button_add: 'Add Post',
    button_remove: 'Remove'
}

type TypePost = {
    id: number
    description_post: string
    avatar_img: string
}

type Post_contentType = {
    title_post: string
    description_post: Array<TypePost>
}


export const MyPosts: React.FC<Post_contentType> = (props) => {
    return (<div>
                <p className={s.title}>{props.title_post}</p>
                <div>
                    <textarea></textarea>
                    <button>{Button.button_add}</button>
                    <button>{Button.button_remove}</button>
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
