import React, {Suspense} from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import Login from "s2-features/f1-login/Login";
import Navbar from "s1-main/m1-ui/common/navbar/Navbar";
import ProfileContainer from "s2-features/f2-profile/ProfileContainer";
import News from "s2-features/f3-news/News";
import Music from "s2-features/f4-music/Music";
import Settings from "s2-features/f5-settings/Settings";

const DialogsContainer = React.lazy(() => import('s2-features/f2-messages/DialogsContainer'));
const UsersContainer = React.lazy(() => import('s2-features/f6-users/UsersContainer'));

export const PATH = {
    LOGIN: '/',
    REGISTER: '/register',
    RESTORE_PASSWORD: '/restore_password',
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