import React from "react";
import s from "./MyPosts.module.css"
import Posts from "./Post/Posts";

const MyPosts = () => {
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
                <Posts message={"Hi, how are you?"}/>
                <Posts message={"It's my first post"}/>
            </div>
        </div>
    )
}

export default MyPosts;