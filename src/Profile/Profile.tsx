import React from "react";

type Main_contentType = {
    content_img: string
    avatar_img: string
}

export const MainContent: React.FC<Main_contentType> = (props) => {
    return (<div>
            <div>
                <img src={props.content_img}/>
            </div>
            <div>
                <img src={props.avatar_img}/>
            </div>
        </div>
    )
}