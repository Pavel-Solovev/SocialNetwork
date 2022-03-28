import React, {ChangeEvent} from "react";
import s from './MyPosts.module.css';
import {Posts} from "./Post/Posts";
import {ProfileInfo} from "../ProfileInfo/ProfileInfo";
import {ProfileDataType} from "../../../redux/profile-reducer";

type ButtonType = {
    button_add: string
    button_remove: string
}
const Button: ButtonType = {
    button_add: 'Add Post',
    button_remove: 'Remove'
}

type PropsType = {
    addPostCallback: () => void
    changeNewTextCallback: (newText: string) => void
    store: ProfileDataType
}

export const MyPosts = (props: PropsType) => {

    const addPost = () => {
        props.addPostCallback()

    }

    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.changeNewTextCallback(e.currentTarget.value);
    }

    return (<>
            <div>
            <ProfileInfo store={props.store}/>
            </div>
            <div className={s.postsBlock}>
                <h3><p className={s.title}>{props.store.title_name}</p></h3>
                <div>
                    <div>
                        <textarea value={props.store.newPostChange} onChange={onPostChange}/>
                    </div>
                    <div>
                        <button onClick={addPost}>{Button.button_add}</button>
                        <button>{Button.button_remove}</button>
                    </div>
                </div>
                <div className={s.posts}>
                    <Posts
                        title_post={props.store.title_post}
                        description_post={props.store.post}
                    />
                </div>
            </div>
        </>
    )

}