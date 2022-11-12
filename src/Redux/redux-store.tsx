import {combineReducers, createStore} from "redux";
import {ProfileReducer} from "./Profile-Reducer";
import {DialogsReducer} from "./Dialogs-Reducer";

const reducers = combineReducers({
    profilePage: ProfileReducer,
    dialogsPage: DialogsReducer
});
export const store = createStore(reducers);
