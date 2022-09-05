import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import NavBar from "./Components/NavBar/NavBar";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import {InterfaceType} from "./Components/interfaceProps";


function App(props: InterfaceType) {
    return (
        <BrowserRouter>
            <div className={"app-wrapper"}>
                <Header/>
                <NavBar/>
                <div className={"app-wrapper-content"}>
                    <Switch>
                        <Route path={'/profile'} render={() => <Profile postData={props.postData}/>}/>
                        <Route path={'/dialogs'} render={() => <Dialogs dialogsData={props.dialogsData}
                                                                        messageData={props.messageData}/>}/>
                    </Switch>
                </div>

            </div>
        </BrowserRouter>

    )
}

export default App;
