const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    dialogs: [
        { id: 1, name: 'Andrew' },
        { id: 2, name: 'Sasha' },
        { id: 3, name: 'Vova' },
        { id: 4, name: 'Ira' },
        { id: 5, name: 'Vika' },
        { id: 6, name: 'Dasha' },
    ],
    messages: [
        { id: 1, message: 'Привет!' },
        { id: 2, message: 'Доров' },
        { id: 3, message: 'Как там с поиском работы?' },
        { id: 3, message: 'Как там с поиском работы2?' },
    ],
    newMessageBody: ''
};

const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.messages.push({ id: 6, message: body });
            return state;
        default:
            return state;
    }
}
export const updateNewMessageBogyCreator = (body) => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY, body: body,
    }
}
export const sendMessageCreator = () => ({ type: SEND_MESSAGE })
export default messagesReducer