import React from "react";
import s from './Header.module.css';


type HeaderType = {
    logo: string
}

const HeaderData: HeaderType = {
    logo: 'https://upload.wikimedia.org/wikipedia/ru/f/f9/Philadelphia_Eagles_primary_logo.png'
}

export const Header = () => {
    return (
        <div className={s.header}>
            <img src={HeaderData.logo}/>
        </div>
    )
}