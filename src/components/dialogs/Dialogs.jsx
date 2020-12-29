import React from 'react';
import Dialog from './dialogItem/Dialog';
import s from './Dialogs.module.css';
import Message from './message/Message';

const Dialogs = (props) => {

    let dialogsElements = props.dialogs.map( d => <Dialog name={d.name} id={d.id}/>);
    let messagesElements = props.messages.map( m => <Message message={m.message} id={m.id}/>);

    return (
        <div className={s.dialogs_wrap}>
            <div className={s.dialogs}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs