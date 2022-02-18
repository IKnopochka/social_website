import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Navbar/Profile/Profile";
import Dialogs from "./components/Navbar/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import News from "./components/Navbar/News/News";
import Music from "./components/Navbar/Music/Music";
import Settings from "./components/Navbar/Settings/Settings";
import {StateProps} from "./state/State";



const App = (props: StateProps) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar sidebar={props.state.sidebar}  />
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path={'/profile'} element={<Profile posts={props.state.posts} addPost={props.addPost} newPostText={props.state.newPostText}/>}/>
                        <Route path={'/dialogs/*'} element={<Dialogs dialogs={props.state.dialogs}
                                                                     messages={props.state.messages}/>}/>
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
