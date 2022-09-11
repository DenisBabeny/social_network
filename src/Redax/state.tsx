import {renderEntireTree} from "../Render";

type MessageType = {
    id: number
    message: string
}
type DialogsType = {
    id: number
    name: string
}
export type PostType = {
    id: number
    message: string
    likesCount: number
}
type ProfilePageType = {
    posts: Array<PostType>

}
type DialogPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessageType>
}

export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogPageType
}
export const state: RootStateType = {
    profilePage: {
        posts: [
            {id: 2, message: "I'm ok u?", likesCount: 12},
            {id: 2, message: "How are you?", likesCount: 25},
            {id: 2, message: "It's my first post", likesCount: 0},
        ],

    },
    dialogsPage: {
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
        ]
    }
}
export const addPost = (postText: string) => {
    const newPost: PostType = {
        id: new Date().getTime(),
        message: postText,
        likesCount: 0

    }
    state.profilePage.posts.push(newPost);
    renderEntireTree(state);
}