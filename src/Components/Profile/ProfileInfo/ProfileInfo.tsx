import React from "react";
import s from './ProfileInfo.module.css';
import {ProfileDataType} from "../../../redux/profile-reducer";

type PropsType = {
    store: ProfileDataType
}

export const ProfileInfo: React.FC<PropsType> = (props) => {
    return (
        <div className={s.profile}>
            <div>
                <img src={props.store.content_img} alt=""/>
            </div>
            <div className={s.desctiptionBlock}>
                <p>{props.store.title_name}</p>
            </div>
        </div>
    )
}
