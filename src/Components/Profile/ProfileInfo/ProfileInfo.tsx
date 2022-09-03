import React from "react";
import s from './ProfileInfo.module.css'

export const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src={'https://ichef.bbci.co.uk/news/999/cpsprodpb/6D5A/production/_119449972_10.jpg'}
                     alt={'image'}/>
            </div>
            <div className={s.descriptionBlock}>
                ava+description
            </div>
        </div>
    )
}