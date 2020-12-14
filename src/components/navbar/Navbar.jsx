import React from 'react';
import s from './Navbar.module.css';

let Navbar = () => {
    return (
        <nav className={s.nav}>
            <div><a href="/profile" className={s.a}>Profile</a></div>
            <div><a  href="/dialogs"  className={s.a}>Messages</a></div>
            <div><a className={s.a}>News</a></div>
            <div><a className={s.a}>Music</a></div>
            <div><a className={s.a}>Settings</a></div>
        </nav>
    );
}

export default Navbar