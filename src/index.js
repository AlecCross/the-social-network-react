import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Dialog from './components/dialogs/dialogItem/Dialog';
import Message from './components/dialogs/message/Message';

let dialogsData = [
  { id: 1, name: 'Andrew' },
  { id: 2, name: 'Sasha' },
  { id: 3, name: 'Vova' },
  { id: 4, name: 'Ira' },
  { id: 5, name: 'Vika' },
  { id: 6, name: 'Dasha' },
]

let messageData = [
  { id: 1, message: 'Привет!' },
  { id: 2, message: 'Доров' },
  { id: 3, message: 'Как там с поиском работы?' },
]

let dialogsElements = dialogsData.map( d => <Dialog name={d.name} id={d.id}/>);
let messagesElements = messageData.map( d => <Message message={d.message} id={d.id}/>);

ReactDOM.render(
  <React.StrictMode>
    <App dialogsIndex={dialogsElements} messagesIndex={messagesElements}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
