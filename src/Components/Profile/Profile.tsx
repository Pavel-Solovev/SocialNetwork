import React from "react";
import s from './Profile.module.css';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ActionsTypes} from "../../redux/state";



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
    newPostChange:string

}

type ProfileData = {
    profilePage: profileDataType
    // addPostCallback: (postText:string) => void
    // upgradeNewPostText: (newText:string)=>void
    dispatch: (action:ActionsTypes) => void
}

export const Profile: React.FC<ProfileData> = (props) => {
    return (<div className={s.profile}>
            <ProfileInfo
                content_img={props.profilePage.content_img}
                title_name={props.profilePage.title_name} />
            <div>
                <MyPosts
                    newPostChange={props.profilePage.newPostChange}
                    title_post={props.profilePage.title_post}
                    description_post={props.profilePage.post}
                    dispatch={props.dispatch}
                    />
            </div>
        </div>
    )
}
