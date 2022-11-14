import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ActionTypes, PostType} from "../../Redux/store";
import s from "./Profile.module.css"
export type PostDataType = {
    profilePage: Array<PostType>
    dispatch:(action: ActionTypes)=>void
}
const Profile = (props: PostDataType) => {
    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPosts profilePage={props.profilePage} dispatch={props.dispatch} />
        </div>
    )
}

export default Profile;