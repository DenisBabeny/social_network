import React from "react";
import s from './ProfileInfo.module.css'

export const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src={'https://w0.peakpx.com/wallpaper/133/71/HD-wallpaper-realistic-anime-girl-realistic-blonde-short-hair-anime.jpg'}
                     alt={'image'}/>
            </div>
            <div className={s.descriptionBlock}>
                ava+description
            </div>
        </div>
    )
}