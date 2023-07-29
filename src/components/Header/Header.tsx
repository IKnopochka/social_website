import React from "react";
import s from './Header.module.css';
import {NavLink} from "react-router-dom";
import {HeaderContainerPropsType} from "./HeaderContainer";
import logo from '../../assets/images/logo_small.png'


const Header = (props: HeaderContainerPropsType) => {
    return <header className={s.header}>
        <div className={s.logoBox}>
            <img src={logo}/>
            <h2>GoChatty</h2>
        </div>

        <div className={s.loginBlock}>
            {props.isAuth
            && <div>
                {props.login}
                <div>
                    <button onClick={props.logout}>Logout</button>
                </div>
            </div>
                // : <NavLink to={'/auth'}>Login</NavLink>
            }

        </div>
    </header>;
}

export default Header;