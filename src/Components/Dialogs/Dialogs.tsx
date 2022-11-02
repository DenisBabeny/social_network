import React, {ChangeEvent} from "react";
import s from "./Dialogs.module.css"
import {DialogsItems, DialogsMessageType} from "./components/DialogsItems";
import {Message} from "./components/message";
import {addMessageActionCreator, changeNewMessageTextActionCreator} from "../../Redax/Dialogs-Reducer";

const Dialogs = (props: DialogsMessageType) => {

    let dialogsElements = props.dialogsData.map((d) => <DialogsItems name={d.name} id={d.id}/>)

    let messagesElement = props.messageData.map((m) => <Message message={m.message}/>)
    const newMessage =React.createRef<HTMLTextAreaElement>()
    const onSendMessage = () => {
        if(newMessage.current) props.dispatch(addMessageActionCreator(newMessage.current.value))
    }
    const onChangeMessage = (e:ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(changeNewMessageTextActionCreator(e.currentTarget.value));

    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElement}</div>
                <div>
                    <div><textarea
                                   placeholder={'Enter your message'}
                                   onChange={onChangeMessage}
                                   ref={newMessage}

                    ></textarea></div>
                    <div><button onClick={onSendMessage}>Send</button></div>
                </div>


            </div>

        </div>
    )
}
export default Dialogs