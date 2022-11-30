import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import News from "./components/Navbar/News/News";
import Music from "./components/Navbar/Music/Music";
import Settings from "./components/Navbar/Settings/Settings";
import {ReduxStorePropsType} from "./state/store";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import ProfileContainer from "./components/Navbar/Profile/ProfileContainer";
import DialogsContainer from "./components/Navbar/Dialogs/DialogsContainer";

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
                        <Route path={'/dialogs/*'} element={<DialogsContainer/>}/>
                        <Route path={'/news'} element={<News/>}/>
                        <Route path={'/music'} element={<Music/>}/>
                        <Route path={'/settings'} element={<Settings/>}/>
                        <Route path={'/users'} element={<UsersContainer/>}/>
                        <Route path={'/login'} element={<Login/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
