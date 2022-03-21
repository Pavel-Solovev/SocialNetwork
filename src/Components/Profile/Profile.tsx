import React from "react";
import s from './Profile.module.css';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {StoreType} from "../../redux/redux-store";

type PropsType = {
    store: StoreType
}

export type PostType = {
    id: number
    description_post: string
    likesCount: number
    avatar_img: string

}


export const Profile: React.FC<PropsType> = (props) => {
    return (<div className={s.profile}>
            <ProfileInfo
                store={props.store}
            />
            <div>
                <MyPostsContainer
                    store={props.store}
                />
            </div>
        </div>
    )
}
