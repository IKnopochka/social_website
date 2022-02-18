import React from "react";
import classes from './Header.module.css';

const Header = () => {
    return <header className={classes.header}>
        <img
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT26l6OGyGgJaVSmGk7jtXWZ80R9oGr1d1x9ecvESWGk3nCeiwYNL3PkQHF5cXRslTtigc&usqp=CAU'
        />
    </header>;
}

export default Header;