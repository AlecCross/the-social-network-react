import React from 'react';
import ReactDOM from 'react-dom';
import { addPost } from './redux/state';
import { HashRouter } from 'react-router-dom';
import App from './App';

export let reRender = (state) => {
  ReactDOM.render(
    <HashRouter>
      <App state={state} addPost={addPost} />
    </HashRouter>, document.getElementById('root')
  );
}

