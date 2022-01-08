import React from "react";
import s from './Header.module.css';

type HeaderType = {
    logo: string
}


export const Header: React.FC<HeaderType> = (props) => {
    return (
        <div className={s.header}>
            <img src={props.logo}/>
        </div>
    )
}