import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import NavBar from "./Components/NavBar/NavBar";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {RootStateType, state} from "./Redax/state";
import {addPost} from './Redax/state'


function App(props: RootStateType) {
    return (
        <BrowserRouter>
            <div className={"app-wrapper"}>
                <Header/>
                <NavBar/>
                <div className={"app-wrapper-content"}>
                    <Switch>
                        <Route path={'/profile'}
                               render={() => <Profile postData={state.profilePage.posts} addPost={addPost}/>}/>
                        <Route path={'/dialogs'}
                               render={() => <Dialogs dialogsData={state.dialogsPage.dialogs}
                                                      messageData={state.dialogsPage.messages}/>}/>
                    </Switch>
                </div>

            </div>
        </BrowserRouter>

    )
}

export default App;
