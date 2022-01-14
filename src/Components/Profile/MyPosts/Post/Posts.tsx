import React from "react";
import s from './Posts.module.css';


type TypePost = {
    id: number
    description_post: string
    avatar_img: string
}

type Post_contentType = {
    title_post: string
    description_post: Array<TypePost>
}


export const Posts: React.FC<Post_contentType> = (props) => {
    return (<div>
            {props.description_post.map(m => {
                    return (
                        <div className={s.item}>
                            <img src={m.avatar_img} alt={''}/>
                            {m.description_post}
                            <div>
                                <span>like</span>
                            </div>
                        </div>
                    )
                }
            )}
        </div>
    )
}
