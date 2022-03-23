import React from "react";
import s from './Posts.module.css';
import {PostType} from "../../../../redux/state";


type Post_contentType = {
    title_post: string
    description_post: Array<PostType>
}


export const Posts: React.FC<Post_contentType> = (props) => {
    return (<div>
            {props.description_post.map(m => {
                    return (
                        <div className={s.item}>
                            <img src={m.avatar_img} alt={''}/>
                            {m.description_post}
                            <div>
                                <span>{m.likesCount}</span>
                            </div>
                        </div>
                    )
                }
            )}
        </div>
    )
}
