import React from "react";
import s from './Profile.module.css';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";


export type PostType = {
    id: number
    description_post: string
    likesCount: number
    avatar_img: string

}

type profileDataType = {
    content_img: string
    title_name: string
    title_post: string
    post: Array<PostType>
}

type ProfileData = {
    profilePage: profileDataType
}

export const Profile: React.FC<ProfileData> = (props) => {
    return (<div className={s.profile}>
            <ProfileInfo
                content_img={props.profilePage.content_img}
                title_name={props.profilePage.title_name} />
            <div>
                <MyPosts
                    title_post={props.profilePage.title_post}
                    description_post={props.profilePage.post}
                    />
            </div>
        </div>
    )
}
