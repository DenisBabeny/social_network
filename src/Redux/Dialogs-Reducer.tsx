import React from 'react';
import {ActionTypes, DialogPageType} from "./store";
const initialState =  {
    dialogs: [
        {id: 1, name: "Denis"},
        {id: 2, name: "Oleg"},
        {id: 3, name: "Alexander"},
        {id: 4, name: "Yana"},
        {id: 5, name: "M.Smite"}
    ],
    messages: [
        {id: 1, message: "Hi"},
        {id: 2, message: "How are you?"},
        {id: 3, message: "Yo"},
        {id: 4, message: "Yo"},
        {id: 5, message: "Yo"}
    ],
    newMessageText: ''
}
export const DialogsReducer = (state: DialogPageType = initialState, action: ActionTypes) => {
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