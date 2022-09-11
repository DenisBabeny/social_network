import App from './App';
import {RootStateType} from "./Redax/state";
import {BrowserRouter} from "react-router-dom";
import ReactDOM from "react-dom";

export const renderEntireTree = (state: RootStateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App profilePage={state.profilePage} dialogsPage={state.dialogsPage}/>
        </BrowserRouter>,
        document.getElementById('root')
    );
}
