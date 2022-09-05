import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
export type PostDataType={
    postData: Array<any>
}
const Profile = (props:PostDataType) => {
    return (
        <div>
                <ProfileInfo/>
                <MyPosts postData={props.postData}/>
        </div>
    )
}

export default Profile;