import React from 'react';
import { sendMessageCreator, updateNewMessageBogyCreator }
    from '../../redux/reducers/messages-reducer';
import Dialogs from './Dialogs';

const DialogsContainer = (props) => {
   debugger;
    let state = props.store.getState();

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator());
    }
    let onNewMessageChange = (body) => {
        // let body = event.target.value;
        props.store.dispatch(updateNewMessageBogyCreator(body));
    }
    return (<Dialogs dialogs={state.messagesPage.dialogs}
        messages={state.messagesPage.messages}
        newMessageBody={state.messagesPage.newMessageBody}
        onSendMessageClick={onSendMessageClick}
        onNewMessageChange={onNewMessageChange}
    />
    )
}
export default DialogsContainer