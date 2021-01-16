import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css';
// import FriendsPreview from '../friends/friendPreview/FriendPreview';

let Navbar = (props) => {
    return (
        <nav className={s.nav}>
            <div className={s.item}><NavLink to="/profile"  activeClassName={s.active}>Profile</NavLink></div>
            <div className={s.item}><NavLink to="/dialogs"  activeClassName={s.active}>Messages</NavLink></div>
            <div className={s.item}><NavLink to="/news"     activeClassName={s.active}>News</NavLink></div>
            <div className={s.item}><NavLink to="/music"    activeClassName={s.active}>Music</NavLink></div>
            <div className={s.item}><NavLink to="/settings" activeClassName={s.active}>Settings</NavLink></div>
            <div 
                className={s.item}><NavLink to="/friends"  activeClassName={s.active}>Friends</NavLink>
                <div>
                    {/* <FriendsPreview users={props.users}/> */}
                </div>
            </div>
        </nav>
    );
}

export default Navbar