import React from 'react';
import s from './Friend.module.css';

const Friend = (props) => {
    return <img className={s.friendImg} src={props.avatar} alt={props.name} />    
}

export default Friend