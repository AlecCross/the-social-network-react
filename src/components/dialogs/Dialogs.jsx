import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';

const Dialog = (props) => {
    let path = '/dialog/' + props.id;
    return(
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) =>{
    return (
        <div className={s.messages}>
            {props.message}
        </div>
    )
}

const Dialogs = (props) => {
    return (
        <div className={s.dialogs_wrap}>
            <div className={s.dialogs}>
               <Dialog name='Andrew' id='1'/>
               <Dialog name='Sasha' id='2'/>
               <Dialog name='Vova' id='3'/>
               <Dialog name='Ira' id='4'/>
               <Dialog name='Vika' id='1'/>
            </div>
            <div className={s.messages}>
                <div>
                    <div>Привет как дела?</div>
                </div>
                <div>
                    <div>Нормас</div>
                </div>
                <div>
                    <div>Работу нашел?</div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs