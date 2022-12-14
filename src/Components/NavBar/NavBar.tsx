import React from "react";
import s from './NavBar.module.css'
import {NavLink} from "react-router-dom";

const NavBar = () => {
    return (
        <nav className={s.nav}>
            <p className={s.open}>Navigation</p>
            <div className={s.burgerMenu}>
                <div className={s.item}>
                    <NavLink to={'/profile'} activeClassName={s.active}>Profile</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to={'/dialogs'} activeClassName={s.active}>Messages</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to={'/news'} activeClassName={s.active}>News</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to={'/music'} activeClassName={s.active}>Music</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to={'settings'} activeClassName={s.active}>Settings</NavLink>
                </div>

            </div>

        </nav>
    )
}
export default NavBar;