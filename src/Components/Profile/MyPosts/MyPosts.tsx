import React, {ChangeEvent} from "react";
import s from './MyPosts.module.css';
import {Posts} from "./Post/Posts";
import {ProfileInfo} from "../ProfileInfo/ProfileInfo";
import {MyPostsType} from "./MyPostsContainer";

type ButtonType = {
    button_add: string
    button_remove: string
}
const Button: ButtonType = {
    button_add: 'Add Post',
    button_remove: 'Remove'
}


export const MyPosts = (props: MyPostsType) => {

    const addPost = () => {
        props.addPostCallback()

    }

    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.changeNewTextCallback(e.currentTarget.value);
    }

    return (<>
            <div>
            <ProfileInfo store={props.profileData}/>
            </div>
            <div className={s.postsBlock}>
                <h3><p className={s.title}>{props.profileData.title_name}</p></h3>
                <div>
                    <div>
                        <textarea value={props.profileData.newPostChange} onChange={onPostChange}/>
                    </div>
                    <div>
                        <button onClick={addPost}>{Button.button_add}</button>
                        <button>{Button.button_remove}</button>
                    </div>
                </div>
                <div className={s.posts}>
                    <Posts
                        title_post={props.profileData.title_post}
                        description_post={props.profileData.post}
                    />
                </div>
            </div>
        </>
    )

}