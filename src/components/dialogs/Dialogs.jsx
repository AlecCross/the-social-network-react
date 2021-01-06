import React from 'react';
import Dialog from './dialogItem/Dialog';
// import { sendMessageCreator, updateNewMessageBogyCreator } from '../../redux/reducers/messages-reducer';
import s from './Dialogs.module.css';
import Message from './message/Message';

const Dialogs = (props) => {
debugger
    let dialogs = props.dialogs.map(d => <Dialog name={d.name} id={d.id} />);
    let messages = props.messages.map(m => <Message message={m.message} id={m.id} />);
    let newMessageBody = props.newMessageBody;
    
    let SendMessageClick = () => {
        if (newMessageBody.length !== 0) {
            props.sendMessageCreator();
        }
    }
    
    let NewMessageChange = () => {
       props.onNewMessageChange();
    }
    let onSendMessageKeyDown = (event) => {
        if (event.target.value.length !== 0) {
            if (event.ctrlKey && event.keyCode === 13) {
                props.sendMessageCreator();
            }
        }
    }

    return (
        <div className={s.dialogs_wrap}>
            <div className={s.dialogs}>
                {dialogs}
            </div>
            <div className={s.messages}>
                <div>{messages}</div>
                <div>
                    <div>
                        <textarea
                            value={newMessageBody}
                            onChange={NewMessageChange}
                            onKeyDown={onSendMessageKeyDown}
                            placeholder='Enter you message'></textarea>
                    </div>
                    <div>
                        <button onClick={SendMessageClick}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs