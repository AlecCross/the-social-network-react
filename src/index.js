import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import App from './App';
import store from './redux/redux-store';

let reRender = (state) => {
  ReactDOM.render(
    <HashRouter>
      <Provider store={store}>
        <App store={store} state={state} dispatch={store.dispatch.bind(store)} />
      </Provider>
    </HashRouter>, document.getElementById('root')
  );
}

reRender(store.getState());

store.subscribe(() => {
  let state = store.getState();
  reRender(state);
});


