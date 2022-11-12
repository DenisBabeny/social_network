import React, {ChangeEvent, MouseEventHandler} from "react";
import s from "./MyPosts.module.css"
import Posts from "./Post/Posts";
import {PostDataType} from "../Profile";
import {addPostActionCreator, changeNewTextActionCreator} from "../../../Redux/Profile-Reducer";



const MyPosts = (props: PostDataType) => {
    const postElements = props.profilePage.map((p) => <Posts message={p.message} likesCount={p.likesCount}/>)
    const newPostElement = React.createRef<HTMLTextAreaElement>();
    const addPost = () => {
        if(newPostElement.current) {
            props.dispatch(addPostActionCreator(newPostElement.current.value))
            newPostElement.current.value = ''
        }
    }
    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(changeNewTextActionCreator(e.currentTarget.value));
    }
    return (
        <div className={s.postsBlock}>
            <div>
                <textarea onChange={onPostChange} ref={newPostElement}></textarea>
            </div>

            <button onClick={addPost}>add post</button>
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