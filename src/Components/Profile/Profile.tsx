import React from "react";
import s from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img src={'https://ichef.bbci.co.uk/news/999/cpsprodpb/6D5A/production/_119449972_10.jpg'}
                     alt={'image'}/>
            </div>
            <div>
                ava+description
            </div>
            <MyPosts/>
        </div>
    )
}

export default Profile;