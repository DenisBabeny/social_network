import React from "react";
import s from "./MyPosts.module.css"
import Posts from "./Post/Posts";

const MyPosts = () => {
    let postData = [
        {id:2, message:"I'm ok u?", likesCount: 12},
        {id:2, message:"How are you?", likesCount: 25},
        {id:2, message:"It's my first post", likesCount: 0},
    ]
    let postElements = postData.map((p)=> <Posts message={p.message} likesCount={p.likesCount}/>)
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