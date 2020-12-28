import React from 'react';
import Dialog from './dialogItem/Dialog';
import s from './Dialogs.module.css';
import Message from './message/Message';

const Dialogs = (props) => {

    let dialogsData = [
        { id: 1, name: 'Andrew' },
        { id: 2, name: 'Sasha' },
        { id: 3, name: 'Vova' },
        { id: 4, name: 'Ira' },
        { id: 5, name: 'Vika' },
        { id: 6, name: 'Dasha' },
    ]

    let messageData = [
        { id: 1, message: 'Привет!' },
        { id: 2, message: 'Доров' },
        { id: 3, message: 'Как там с поиском работы?' },
    ]

    let dialogsElements = dialogsData.map( d => <Dialog name={d.name} id={d.id}/>);
    let messageElements = messageData.map( d => <Message name={d.message} id={d.id}/>);

    return (
        <div className={s.dialogs_wrap}>
            <div className={s.dialogs}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messageElements}
            </div>
        </div>
    )
}

export default Dialogs