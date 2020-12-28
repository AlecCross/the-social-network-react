import React from 'react';
import Dialog from './dialogItem/Dialog';
import s from './Dialogs.module.css';
import Message from './message/Message';

const Dialogs = (props) => {

    return (
        <div className={s.dialogs_wrap}>
            <div className={s.dialogs}>
                {props.dialogsElementsApp}
            </div>
            <div className={s.messages}>
                {props.messagesElementsApp}
            </div>
        </div>
    )
}

export default Dialogs