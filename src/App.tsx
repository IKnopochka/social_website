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
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Navbar/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";

const App: React.FC<ReduxStorePropsType> = (props) => {
    const {sidebar} = props.store.getState()
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar sidebar={sidebar}/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path={'/profile/:userId'} element={<ProfileContainer/>}/>
                        <Route path={'/profile'} element={<ProfileContainer/>}/>
                        <Route path={'/dialogs/*'} element={<SuperDialogsContainer/>}/>
                        <Route path={'/news'} element={<News/>}/>
                        <Route path={'/music'} element={<Music/>}/>
                        <Route path={'/settings'} element={<Settings/>}/>

                        <Route path={'/users'} element={<UsersContainer/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
