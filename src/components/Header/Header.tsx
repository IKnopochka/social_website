import React from "react";
import classes from './Header.module.css';
import {NavLink} from "react-router-dom";
import {DataStateType} from "../../state/authReducer";

const Header = (props: DataStateType) => {
    return <header className={classes.header}>
        <img
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT26l6OGyGgJaVSmGk7jtXWZ80R9oGr1d1x9ecvESWGk3nCeiwYNL3PkQHF5cXRslTtigc&usqp=CAU'
        />
        <div className={classes.loginBlock}>
            {props.isAuth ? props.login : <NavLink to={'/auth'}>Login</NavLink>}

        </div>


    </header>;
}

export default Header;