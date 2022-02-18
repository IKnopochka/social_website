import React from "react";
import classes from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import {Friends} from "./Friends/Friends";
import {SidebarPropsType} from "../../state/State";

/*let classes = {
    'nav': 'navClass'
    'item': 'itemClass'
}
{'${classes.active} ${classes.item}'}
*/

const Navbar = (props: SidebarPropsType) => {
    return (
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
                </nav>
            </div>
            <div >
                <div>Friends</div>
                <div>{props.sidebar.map(s => (<Friends id={s.id} name={s.name} src={s.src} />))}</div>
            </div>
        </div>
    )
}
export default Navbar;