import React, {ChangeEvent} from "react";
import s from './MyPosts.module.css';
import {Posts} from "./Post/Posts";
import {StoreType} from "../../../redux/redux-store";

type ButtonType = {
    button_add: string
    button_remove: string
}
const Button: ButtonType = {
    button_add: 'Add Post',
    button_remove: 'Remove'
}

type PropsType = {
    addPostCallback: ()=> void
    changeNewTextCallback: (newText:string)=>void
    store: StoreType
}

export const MyPosts = (props: PropsType) => {

    const store = props.store.getState()

    const addPost = () => {
        props.addPostCallback()

    }

    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.changeNewTextCallback(e.currentTarget.value);
    }

        return (<div className={s.postsBlock}>
                <h3><p className={s.title}>{store.profilePage.title_name}</p></h3>
                <div>
                    <div>
                        <textarea value={store.profilePage.newPostChange} onChange={onPostChange}/>
                    </div>
                    <div>
                        <button onClick={addPost}>{Button.button_add}</button>
                        <button>{Button.button_remove}</button>
                    </div>
                </div>
                <div className={s.posts}>
                    <Posts
                        title_post={store.profilePage.title_post}
                        description_post={store.profilePage.post}
                    />
                </div>
            </div>
        )

}