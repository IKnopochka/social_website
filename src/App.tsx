import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Navbar/Profile/Profile";

import {BrowserRouter, Route, Routes} from "react-router-dom";
import News from "./components/Navbar/News/News";
import Music from "./components/Navbar/Music/Music";
import Settings from "./components/Navbar/Settings/Settings";
import {SuperDialogsContainer} from "./components/Navbar/Dialogs/DialogsContainer";
import {ReduxStorePropsType} from "./state/store";

const App: React.FC<ReduxStorePropsType> = (props) => {
    const {profilePage, dialogsPage, sidebar} = props.store.getState()
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar sidebar={sidebar}/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path={'/profile'}
                               element={<Profile
                                   /*store={props.store}*/
                                   /*posts={profilePage.posts}
                                   dispatch={props.store.dispatch.bind(props.store)}
                                   newPostText={profilePage.newPostText}*/
                               />}
                        />
                        <Route path={'/dialogs/*'}
                               element={<SuperDialogsContainer /*store={props.store}*/
                                                          /*dialogs={dialogsPage.dialogs}
                                                          messages={dialogsPage.messages}
                                                          newMessageText={dialogsPage.newMessageText}
                                                          dispatch={props.store.dispatch.bind(props.store)}*/
                               />}
                        />
                        <Route path={'/news'} element={<News/>}/>
                        <Route path={'/music'} element={<Music/>}/>
                        <Route path={'/settings'} element={<Settings/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
