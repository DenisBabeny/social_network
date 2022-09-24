
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
    messageForNewPost: string

}
type DialogPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessageType>
}

export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogPageType
}

export type StoreType = {
    _state: RootStateType
    renderEntireTree:()=>void
    subscribe:(callback: () => void)=>void
    getState:()=>RootStateType
    dispatch:(action: ActionTypes)=>void
}
export type AddPostActionType = {
    type:"ADD-POST",
    postText: string
}
export type ActionTypes = AddPostActionType | ChangeNewTextActionType

export type ChangeNewTextActionType = {
    type:"CHANGE-NEW-TEXT",
    newText: string
}
export const store: StoreType = {
    _state: {
        profilePage: {
            messageForNewPost: '',
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
    },
    renderEntireTree(){
        console.log('State changed')
    },

    subscribe(callback: () => void){
        this.renderEntireTree = callback;
    },
    getState(){
        return this._state
    },
    dispatch(action){
        if(action.type === "ADD-POST"){
            const newPost:PostType ={
                id: new Date().getTime(),
                message: action.postText,
                likesCount: 0

            }
            this._state.profilePage.posts.push(newPost)
            this.renderEntireTree()
        } else if(action.type === "CHANGE-NEW-TEXT"){
            this._state.profilePage.messageForNewPost = action.newText;
            this.renderEntireTree();
        }
    }
}