import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Dialog from './components/dialogs/dialogItem/Dialog';
import Message from './components/dialogs/message/Message';
import Post from './components/profile/post/Post';

let dialogs = [
  { id: 1, name: 'Andrew' },
  { id: 2, name: 'Sasha' },
  { id: 3, name: 'Vova' },
  { id: 4, name: 'Ira' },
  { id: 5, name: 'Vika' },
  { id: 6, name: 'Dasha' },
]

let messages = [
  { id: 1, message: 'Привет!' },
  { id: 2, message: 'Доров' },
  { id: 3, message: 'Как там с поиском работы?' },
]

let stockAvatar = 'https://lumpics.ru/wp-content/uploads/2017/11/Programmyi-dlya-sozdaniya-avatarok.png';
let posts = [
  { id: 1, text: 'Пост1', avatar: stockAvatar },
  { id: 2, text: 'Пост2', avatar: stockAvatar },
  { id: 3, text: 'Пост3', avatar: stockAvatar },
  { id: 4, text: 'Пост4', avatar: stockAvatar },
]

ReactDOM.render(
  <React.StrictMode>
    <App dialogs={dialogs} messages={messages} posts = {posts}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
