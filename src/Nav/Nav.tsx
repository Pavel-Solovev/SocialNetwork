import React from "react";

type NavDataTadLink = {
    array_tab_link: Array<TypeLink>
}

type TypeLink = {
    id: number
    tab_link: string
}

export const Nav: React.FC<NavDataTadLink> = (props) => {
    return (<div>
            {props.array_tab_link.map(m=>{
                return (
                    <div>
                        <a href={m.tab_link}>{m.tab_link}</a>
                    </div>
                )
            })}
            </div>

    )
}

