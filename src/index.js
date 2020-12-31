import reportWebVitals from './reportWebVitals';
import store from './redux/state';
import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import App from './App';

let reRender = (state) => {
  ReactDOM.render(
    <HashRouter>
      <App state={state} dispatch={store.dispatch.bind(store)}/>
    </HashRouter>, document.getElementById('root')
  );
}

reRender(store.getState());

store.subscribe(reRender);


