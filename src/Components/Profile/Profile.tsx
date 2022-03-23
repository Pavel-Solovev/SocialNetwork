import React from "react";
import s from './Profile.module.css';
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";

export const Profile = () => {
    return (<div className={s.profile}>
            <div>
                <MyPostsContainer
                />
            </div>
        </div>
    )
}
