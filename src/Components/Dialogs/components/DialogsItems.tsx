import s from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";
import React from "react";

type DialogsItemsPropsType = {
    id: number
    name: string
}
export const DialogsItems = (props: DialogsItemsPropsType) => {
    let path = '/dialogs/' + props.id
    return <div className={s.dialog + '' + s.active}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
}