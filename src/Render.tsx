import App from './App';
import {BrowserRouter} from "react-router-dom";
import ReactDOM from "react-dom";
import {store} from "./Redux/redux-store";
export const renderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App store={store}/>
        </BrowserRouter>,
        document.getElementById('root')
    );
}

