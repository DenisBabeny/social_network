import React from "react";
import s from "./Dialogs.module.css"
import {DialogsItems} from "./components/DialogsItems";
import {Message} from "./components/message";

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogsItems name={'Denis'} id={'1'}/>
                <DialogsItems name={'Oleg'} id={'2'}/>
                <DialogsItems name={'Alexander'} id={'3'}/>
                <DialogsItems name={'Yana'} id={'4'}/>
                <DialogsItems name={'M.Smite'} id={'5'}/>
            </div>
            <div className={s.messages}>
                <Message message={'Hi'}/>
                <Message message={'How are you?'}/>
                <Message message={'Yo'}/>

            </div>

        </div>
    )
}
export default Dialogs