import React, {ChangeEvent} from "react";
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
export type MyPosts_contentType = {
    addPostCallback: ()=> void
    changeNewTextCallback: (newText:string)=>void
    newPostChange: string
    title_post: string
    description_post: PostType[]
}


export const MyPosts = (props: MyPosts_contentType) => {

    const addPost = () => {
        // alert(newPostElement.current?.value);
        props.addPostCallback()

    }

    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.changeNewTextCallback(e.currentTarget.value);
    }

        return (<div className={s.postsBlock}>
                <h3><p className={s.title}>{props.title_post}</p></h3>
                <div>
                    <div>
                        <textarea value={props.newPostChange} onChange={onPostChange}/>
                    </div>
                    <div>
                        <button onClick={addPost}>{Button.button_add}</button>
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