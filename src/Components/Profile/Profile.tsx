import React from "react";
import s from './Profile.module.css';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";


type TypePost = {
    id: number
    description_post: string
    avatar_img: string
}

type Main_contentType = {
    content_img: string
    title_name: string
    title_post: string
    description_post: Array<TypePost>
}


export const Profile: React.FC<Main_contentType> = (props) => {
    return (<div className={s.profile}>
            <ProfileInfo
                content_img={props.content_img}
                title_name={props.title_name} />
            <div>
                <MyPosts
                    title_post={props.title_post}
                    description_post={props.description_post}
                    />
            </div>
        </div>
    )
}
