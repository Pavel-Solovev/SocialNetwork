import React from "react";
import s from './ProfileInfo.module.css';

type Main_contentType = {
    content_img: string
    title_name: string
}

export const ProfileInfo: React.FC<Main_contentType> = (props) => {
    return (
        <div className={s.profile}>
            <div>
                <img src={props.content_img} alt=""/>
            </div>
            <div className={'s.desctiptionBlock'}>
                <p>{props.title_name}</p>
            </div>
        </div>
    )
}
