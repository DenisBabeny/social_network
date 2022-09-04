import React from "react";
import s from "./Dialogs.module.css"
import {DialogsItems} from "./components/DialogsItems";
import {Message} from "./components/message";

const Dialogs = () => {
    let dialogsData = [
        {id: 1, name: "Denis"},
        {id: 2, name: "Oleg"},
        {id: 3, name: "Alexander"},
        {id: 4, name: "Yana"},
        {id: 5, name: "M.Smite"}
    ]
    let messageData = [
        {id: 1, message: "Hi"},
        {id: 2, message: "How are you?"},
        {id: 3, message: "Yo"},
        {id: 4, message: "Yo"},
        {id: 5, message: "Yo"}
    ]
    let dialogsElements = dialogsData.map((d) => <DialogsItems name={d.name} id={d.id}/>)

    let messagesElement = messageData.map((m) => <Message message={m.message}/>)
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElement}
            </div>

        </div>
    )
}
export default Dialogs