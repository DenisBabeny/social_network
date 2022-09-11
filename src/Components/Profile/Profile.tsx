import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {addPost, PostType} from "../../Redax/state";

export type PostDataType = {
    postData: Array<PostType>
    addPost: (postText: string) => void
}
const Profile = (props: PostDataType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts postData={props.postData} addPost={addPost}/>
        </div>
    )
}

export default Profile;