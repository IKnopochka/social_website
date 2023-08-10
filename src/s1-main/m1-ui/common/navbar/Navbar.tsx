import React from "react";
import s from 's1-main/m1-ui/common/navbar/Navbar.module.css';
import {NavLink} from "react-router-dom";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import {SuperButton} from "s1-main/m1-ui/common/SuperButton/SuperButton";
import profile_logo from '../../images/navbarLogos/profile.svg'
import messages_logo from '../../images/navbarLogos/messages.svg'
import news_logo from '../../images/navbarLogos/news.svg'
import music_logo from '../../images/navbarLogos/music.svg'
import settings_logo from '../../images/navbarLogos/settings.svg'
import users_logo from '../../images/navbarLogos/users.svg'

const Navbar = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexWrap: 'wrap',
                width: '300px',
                margin: '10px',
                '& > :not(style)': {
                    width: '300px',
                    height: '400px'
                },
            }}
        >
            <Paper elevation={5}>
                <nav className={s.nav}>
                    <SuperButton xType='secondary'>
                        <NavLink to='/profile'>
                            <img src={profile_logo}/>
                            <p>Profile</p>
                        </NavLink>
                    </SuperButton>
                    <SuperButton xType='secondary'>
                        <NavLink to='/dialogs'>
                            <img src={messages_logo}/>
                            <p>Messages</p>
                        </NavLink>
                    </SuperButton>
                    <SuperButton xType='secondary'>
                        <NavLink to='/news'>
                            <img src={news_logo}/>
                            <p>News</p>
                        </NavLink>
                    </SuperButton>
                    <SuperButton xType='secondary'>
                        <NavLink to='/music'>
                            <img src={music_logo}/>
                            <p>Music</p>
                        </NavLink>
                    </SuperButton>
                    <SuperButton xType='secondary'>
                        <NavLink to='/settings'>
                            <img src={settings_logo}/>
                            <p>Settings</p>
                        </NavLink>
                    </SuperButton>
                    <SuperButton xType='secondary'>
                        <NavLink to='/users'>
                            <img src={users_logo}/>
                            <p>Users</p>
                        </NavLink>
                    </SuperButton>
                </nav>
            </Paper>
        </Box>

    )
}
export default Navbar;