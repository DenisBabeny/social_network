import React from "react";
import s from "./Dialogs.module.css"
import {DialogsItems, DialogsMessageType} from "./components/DialogsItems";
import {Message} from "./components/message";

const Dialogs = (props: DialogsMessageType) => {

    let dialogsElements = props.dialogsData.map((d) => <DialogsItems name={d.name} id={d.id}/>)

    let messagesElement = props.messageData.map((m) => <Message message={m.message}/>)
    const newMessage = React.createRef<HTMLTextAreaElement>()
    const addMessage = () => {
        alert(newMessage.current?.value)
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElement}
                <textarea></textarea>
                <button onClick={addMessage}>add</button>
            </div>

        </div>
    )
}
export default Dialogs