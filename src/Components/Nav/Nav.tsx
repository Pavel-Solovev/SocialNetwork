import React from "react";
import s from './Nav.module.css'
import {NavLink} from "react-router-dom";

type TypeLink = {
    id: number
    tab_link: string
}

const NavDataTadLink: TypeLink[] = [
    {id: 1, tab_link: 'Profile'},
    {id: 2, tab_link: 'Messages'},
    {id: 3, tab_link: 'News'},
    {id: 4, tab_link: 'Music'},
    {id: 5, tab_link: 'Settings'}
]
export const Navbar = () => {
    return (<nav className={s.nav}>
            {NavDataTadLink.map(m=>{
                return (
                    <div key={m.id} className={s.item}>
                        <NavLink to={`/${m.tab_link}`} className={navData => navData.isActive? s.active : s.item }>{m.tab_link}</NavLink>
                    </div>
                )
            })}
            </nav>
    )
}


