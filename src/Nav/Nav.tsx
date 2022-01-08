import React from "react";
import s from './Nav.module.css'

type NavDataTadLink = {
    array_tab_link: Array<TypeLink>
}

type TypeLink = {
    id: number
    tab_link: string
}

export const Nav: React.FC<NavDataTadLink> = (props) => {
    return (<nav className={s.nav}>
            {props.array_tab_link.map(m=>{
                return (
                    <div className={s.item}>
                        <a href={m.tab_link}>{m.tab_link}</a>
                    </div>
                )
            })}
            </nav>

    )
}

