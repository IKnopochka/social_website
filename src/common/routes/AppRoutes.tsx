import React, {Suspense} from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import Login from "components/Login/Login";
import Navbar from "components/Navbar/Navbar";
import ProfileContainer from "components/Navbar/Profile/ProfileContainer";
import News from "components/Navbar/News/News";
import Music from "components/Navbar/Music/Music";
import Settings from "components/Navbar/Settings/Settings";
import DialogsContainer from "components/Navbar/Messages/DialogsContainer";
import UsersContainer from "components/Users/UsersContainer";
import {Layout} from "common/header/Layout";

export const PATH = {
    LOGIN: '/',
    DIALOGS: '/dialogs/*',
    USERS: '/users',
    PROFILE_ID: '/profile/:userId',
    PROFILE: '/profile',
    NEWS: '/news',
    MUSIC: '/music',
    SETTINGS: '/settings',
} as const

export const AppRoutes = () => {
    return (
        <>
            <Routes>
                <Route path={PATH.LOGIN} element={<Login/>}/>
            </Routes>
            <Suspense fallback={<div>Loading...</div>}>
                    <Routes>
                        <Route path={PATH.DIALOGS} element={<DialogsContainer/>}/>
                        <Route path={PATH.USERS} element={<UsersContainer/>}/>
                    </Routes>
            </Suspense>
            <Routes>
                <Route path={PATH.PROFILE_ID} element={<ProfileContainer/>}/>
                <Route path={PATH.PROFILE} element={<ProfileContainer/>}/>
                <Route path={PATH.NEWS} element={<News/>}/>
                <Route path={PATH.MUSIC} element={<Music/>}/>
                <Route path={PATH.SETTINGS} element={<Settings/>}/>
            </Routes>

        </>
    );
};