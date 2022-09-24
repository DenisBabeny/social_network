import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import NavBar from "./Components/NavBar/NavBar";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {StoreType} from "./Redax/state";
type PropsType={
    store:StoreType
}

const App: React.FC<PropsType>=(props)=>{
    const state = props.store.getState()
    return (
        <BrowserRouter>
            <div className={"app-wrapper"}>
                <Header/>
                <NavBar/>
                <div className={"app-wrapper-content"}>
                    <Switch>
                        <Route path={'/profile'}
                               render={() => <Profile profilePage={state.profilePage.posts}
                                                      dispatch={props.store.dispatch.bind(props.store)}
                               />}/>
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
