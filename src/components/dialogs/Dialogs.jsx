import React from 'react';
import Dialog from './dialogItem/Dialog';
// import { sendMessageCreator, updateNewMessageBogyCreator } from '../../redux/reducers/messages-reducer';
import s from './Dialogs.module.css';
import Message from './message/Message';

const Dialogs = (props) => {
    let dialogs = props.messagesPage.dialogs.map(d => <Dialog name={d.name} id={d.id} key={d.id}/>);
    let messages = props.messagesPage.messages.map(m => <Message message={m.message} id={m.id} key={m.id}/>);
    let newMessageBody = props.messagesPage.newMessageBody;
    debugger
    let SendMessageClick = () => {
        if (newMessageBody.length !== 0) {
            props.sendMessage();
        }
    }
    
    let NewMessageChange = (event) => {
        let body = event.target.value;
       props.updateNewMessageBody(body);
    }
    let onSendMessageKeyDown = (event) => {
        if (event.target.value.length !== 0) {
            if (event.ctrlKey && event.keyCode === 13) {
                props.sendMessage();
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