import React from "react";
import s from "./Posts.module.css"
type PostsPropsType ={
    message: string
}
const Posts = (props:PostsPropsType) => {
    return (
        <div className={s.item}>
            <img
                src={"https://e7.pngegg.com/pngimages/613/636/png-clipart-computer-icons-user-profile-male-avatar-avatar-heroes-logo.png"}
                alt={"Avatar"}/>
            {props.message}
            <div>
                <span>like</span>
            </div>

        </div>
    )
}

export default Posts;