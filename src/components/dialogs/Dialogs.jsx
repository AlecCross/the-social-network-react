import React from 'react';
import { sendMessageCreator, updateNewMessageBogyCreator } from '../../redux/state';
import Dialog from './dialogItem/Dialog';
import s from './Dialogs.module.css';
import Message from './message/Message';

const Dialogs = (props) => {

    let dialogsElements = props.messagesPage.dialogs.map(d => <Dialog name={d.name} id={d.id} />);
    let messagesElements = props.messagesPage.messages.map(m => <Message message={m.message} id={m.id} />);
    let newMessageBody = props.messagesPage.newMessageBody;
    
    let onSendMessageClick = () => {
        if (newMessageBody.length !== 0) {
            props.dispatch(sendMessageCreator());
        }
    }
    
    let onNewMessageChange = (event) => {
        let body = event.target.value;
        props.dispatch(updateNewMessageBogyCreator(body));
    }
    let onSendMessageKeyDown = (event) => {
        if (event.target.value.length !== 0) {
            if (event.ctrlKey && event.keyCode === 13) {
                props.dispatch(sendMessageCreator());
            }
        }
    }

    return (
        <div className={s.dialogs_wrap}>
            <div className={s.dialogs}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div>
                        <textarea
                            value={newMessageBody}
                            onChange={onNewMessageChange}
                            onKeyDown={onSendMessageKeyDown}
                            placeholder='Enter you message'></textarea>
                    </div>
                    <div>
                        <button onClick={onSendMessageClick}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs