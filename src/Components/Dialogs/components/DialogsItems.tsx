import s from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";
import React from "react";
import {ActionTypes} from "../../../Redux/store";

export type DialogsMessageType = {
    dialogsData: Array<any>
    messageData: Array<any>
    dispatch:(action: ActionTypes)=>void
}
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