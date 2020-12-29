import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Dialog from './components/dialogs/dialogItem/Dialog';
import Message from './components/dialogs/message/Message';
import Post from './components/profile/post/Post';
import state from './redux/state';

ReactDOM.render(
  <React.StrictMode>
    <App dialogs={state.dialogs} messages={state.messages} posts = {state.posts}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
