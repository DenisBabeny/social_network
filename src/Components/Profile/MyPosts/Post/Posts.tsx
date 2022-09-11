import React from "react";
import s from "./Posts.module.css"

type MessageType = {
    message: string
    likesCount: number
}
const Posts = (props: MessageType) => {
    return (
        <div className={s.item}>
            <img
                src={"https://e7.pngegg.com/pngimages/613/636/png-clipart-computer-icons-user-profile-male-avatar-avatar-heroes-logo.png"}
                alt={"Avatar"}/>
            {props.message}
            <div>
                <span>like {props.likesCount}</span>
            </div>

        </div>
    )
}

export default Posts;