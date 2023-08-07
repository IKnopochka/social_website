import React from "react";
import s from 's1-main/m1-ui/common/header/Header.module.css';
import {HeaderContainerPropsType} from "s1-main/m1-ui/common/header/HeaderContainer";
import logo from 's1-main/m1-ui/images/logo_small.png'
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import IconButton from '@mui/material/IconButton';


const Header = (props: HeaderContainerPropsType) => {
    return <header className={s.header}>
        <div className={s.logoBox}>
            <img src={logo}/>
            <h2>GoChatty</h2>
        </div>

        {props.isAuth
        && <div className={s.loginBlock}>
            <IconButton onClick={props.logout} sx={{
                margin: '5px',
                backgroundColor: 'none',
                color: '#a0a0a1',
                '&:hover': {
                    backgroundColor: 'none',
                    color: '#E76732FF'
                }
            }}>
                {props.login}
                <LogoutOutlinedIcon style={{margin: '5px'}}/>
            </IconButton>
        </div>
        }


    </header>;
}

export default Header;