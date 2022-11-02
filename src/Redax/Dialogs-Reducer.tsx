import React from 'react';
import {ActionTypes, DialogPageType} from "./state";

export const DialogsReducer = (state: DialogPageType, action: ActionTypes) => {
    switch (action.type) {
        case "CHANGE-NEW-TEXT-MESSAGE":
            state.newMessageText = action.body
            break;
        case "ADD-MESSAGE":
            let body = state.newMessageText
            state.messages.push({id: 6, message: body})
            state.newMessageText = ''
            break;
    }
    return (
        state
    );
};
export const addMessageActionCreator = (MessageText: string) => {
    return {
        type: "ADD-MESSAGE",
        postText: MessageText
    } as const
}

export const changeNewMessageTextActionCreator = (newText: string) => {
    return {
        type: "CHANGE-NEW-TEXT-MESSAGE",
        body: newText
    } as const
}