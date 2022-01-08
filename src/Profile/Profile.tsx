import React from "react";
import s from './Profile.module.css';

type TypePost = {
    id: number
    description_post: string
}

type Main_contentType = {
    content_img: string
    avatar_img: string
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
                <img className={s.avatar} src={props.avatar_img}/>
            </div>
            <div>
                <p className={s.title}>{props.title_post}</p>
                <div>
                    {props.description_post.map(m => {
                        return (
                            <div>
                                <p>{m.description_post}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
