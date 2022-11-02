import React from 'react';
import {ActionTypes, PostType, ProfilePageType} from "./state";

export const ProfileReducer = (state: ProfilePageType, action: ActionTypes) => {
    switch (action.type) {
        case "ADD-POST":
            const newPost: PostType = {
                id: new Date().getTime(),
                message: action.postText,
                likesCount: 0

            }
            state.posts.push(newPost)
            break;
        case "CHANGE-NEW-TEXT":
            state.messageForNewPost = action.newText;
            break;
    }
    return (
        state
    );
};
export const addPostActionCreator = (postText: string) => {
    return {
        type: "ADD-POST",
        postText: postText
    } as const
}
export const changeNewTextActionCreator = (newText: string) => {
    return {
        type: "CHANGE-NEW-TEXT",
        newText: newText
    } as const
}
