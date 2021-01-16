import { connect } from 'react-redux';
import { sendMessageCreator, updateNewMessageBogyCreator }
    from '../../redux/reducers/messages-reducer';
import Dialogs from './Dialogs';

let mapStateToProps = (state) => ({messagesPage: state.messagesPage});
let mapDispatchToProps = (dispatch) => ({
    sendMessage: () => {dispatch(sendMessageCreator())},
    updateNewMessageBody: (body) => {dispatch(updateNewMessageBogyCreator(body))},
});

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);
export default DialogsContainer