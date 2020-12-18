import React from 'react';
import s from './Dialogs.module.css';

const Dialogs = (props) => {
    return (
        <div className={s.dialogs_wrap}>
            <div className={s.dialogs}>
                <div className={s.dialog}>
                    <div>Vasil</div>
                </div>
                <div className={s.dialog + ' ' + s.active}>
                    <div>Victor</div>
                </div>
                <div className={s.dialog}>
                    <div>Vova</div>
                </div>
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