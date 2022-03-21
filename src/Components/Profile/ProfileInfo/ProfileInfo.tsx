import React from "react";
import s from './ProfileInfo.module.css';
import {StoreType} from "../../../redux/redux-store";

type PropsType = {
    store: StoreType
}

export const ProfileInfo: React.FC<PropsType> = (props) => {
    const store = props.store.getState()
    return (
        <div className={s.profile}>
            <div>
                <img src={store.profilePage.content_img} alt=""/>
            </div>
            <div className={s.desctiptionBlock}>
                <p>{store.profilePage.title_name}</p>
            </div>
        </div>
    )
}
