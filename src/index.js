import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import App from './App';
import store from './redux/redux-store';

let reRender = (state) => {
  ReactDOM.render(
    <HashRouter>
      <App state={state} dispatch={store.dispatch.bind(store)}/>
    </HashRouter>, document.getElementById('root')
  );
}

reRender(store.getState());

store.subscribe(()=>{
  let state = store.getState();
  reRender(state);
});


