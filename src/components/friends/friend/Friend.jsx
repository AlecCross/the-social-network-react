import React from 'react';
import s from './Friend.module.css';
import cx from 'classnames';


const Friend = (props) => {
    let minified = props.minified ? s.minifiedFriend : undefined;
    return <img className={ cx(s.friendImg, minified) } src={props.avatar} alt={props.name} />    
}

export default Friend