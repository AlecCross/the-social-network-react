import React from 'react';
import { connect } from 'react-redux';
import { sendMessageCreator, updateNewMessageBogyCreator }
    from '../../redux/reducers/messages-reducer';
import Dialogs from './Dialogs';

// const DialogsContainer = (props) => {
//    debugger;
//     let state = props.store.getState();

//     let onSendMessageClick = () => {
//         props.store.dispatch(sendMessageCreator());
//     }
//     let onNewMessageChange = (body) => {
//         // let body = event.target.value;
//         props.store.dispatch(updateNewMessageBogyCreator(body));
//     }
//     return (<Dialogs dialogs={state.messagesPage.dialogs}
//         messages={state.messagesPage.messages}
//         newMessageBody={state.messagesPage.newMessageBody}
//         onSendMessageClick={onSendMessageClick}
//         onNewMessageChange={onNewMessageChange}
//     />
//     )
// }

let mapStateToProps = (state) => ({messagesPage: state.messagesPage});
let mapDispatchToProps = (dispatch) => ({
    sendMessage: () => {dispatch(sendMessageCreator())},
    updateNewMessageBody: (body) => {dispatch(updateNewMessageBogyCreator(body))},
});

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);
export default DialogsContainer