import React from "react";
import s from "./MyPosts.module.css"
import Posts from "./Post/Posts";
import {PostDataType} from "../Profile";

const MyPosts = (props:PostDataType) => {

    let postElements = props.postData.map((p)=> <Posts message={p.message} likesCount={p.likesCount}/>)
    return (
        <div className={s.postsBlock}>
            <div>
                <textarea></textarea>
            </div>

            <button>add post</button>
            <div>
                <h3>My post</h3>
                <div>New Post</div>
            </div>
            <div className={s.posts}>
                {postElements}
            </div>
        </div>
    )
}

export default MyPosts;