import React from "react";
import classes from 's1-main/m1-ui/common/navbar/Navbar.module.css';
import {NavLink} from "react-router-dom";
import Paper from "@mui/material/Paper";
import {LoginForm} from "s2-features/f1-login/LoginForm";
import Box from "@mui/material/Box";

const Navbar = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexWrap: 'wrap',
                margin: '50px auto',
                '& > :not(style)': {
                    m: 1,
                    width: '413px',
                    height: '552px',
                },
            }}
        >
            <Paper elevation={5}>
                <div className={classes.nav}>
                    <div>
                        <nav>
                            <div className={classes.item}>
                                <NavLink to='/profile'
                                         className={({isActive}) => isActive ? classes.active : classes.item}>Profile</NavLink>
                            </div>
                            <div className={classes.item}>
                                <NavLink to='/dialogs'
                                         className={({isActive}) => isActive ? classes.active : classes.item}>Messages</NavLink>
                            </div>
                            <div className={classes.item}>
                                <NavLink to='/news'
                                         className={({isActive}) => isActive ? classes.active : classes.item}>News</NavLink>
                            </div>
                            <div className={classes.item}>
                                <NavLink to='/music'
                                         className={({isActive}) => isActive ? classes.active : classes.item}>Music</NavLink>
                            </div>
                            <div className={classes.item}>
                                <NavLink to='/settings'
                                         className={({isActive}) => isActive ? classes.active : classes.item}>Settings</NavLink>
                            </div>
                            <NavLink to='/users'
                                     className={({isActive}) => isActive ? classes.active : classes.item}>Users</NavLink>
                            <div>

                            </div>
                        </nav>
                    </div>
                </div>
            </Paper>
        </Box>

    )
}
export default Navbar;