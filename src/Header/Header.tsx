import React from "react";

type HeaderType = {
    logo: string
}


export const Header: React.FC<HeaderType> = (props) => {
    return (
        <div>
            <img src={props.logo}/>
        </div>
    )
}