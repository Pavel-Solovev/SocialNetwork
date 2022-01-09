import React from "react";
import s from './Profile.module.css';
import {MyPosts} from "./MyPosts/MyPosts";

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
            <div>
                <img src={props.content_img}/>
            </div>
            <div>
                <p className={s.title}>{props.title_name}</p>
            </div>
            <div>
                <MyPosts
                    title_post={props.title_post}
                    description_post={props.description_post}
                    />
            </div>
        </div>
    )
}
